/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ActivationContext } from "./ActivationContext.js";
import { ActivationException } from "./ActivationException.js";
import { ConstructorActivator } from "./ConstructorActivator.js";
import type { ServiceDescriptor } from "./ServiceDescriptor.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import { ServiceLifetime } from "./ServiceLifetime.js";
import type { ServiceProvider } from "./ServiceProvider.js";
import { ServiceRegistry } from "./ServiceRegistry.js";
import { ServiceScope } from "./ServiceScope.js";

/**
 * Runtime service resolver.
 *
 * Responsibilities:
 * - Locate registered service descriptors.
 * - Activate registered services.
 * * - Execute factory registrations.
 * - Delegate implementation activation.
 * - Manage singleton caching.
 * - Manage scoped lifetime caching.
 * - Detect circular dependencies.
 */
export class ServiceResolver {
  /**
   * Runtime constructor activator.
   */
  private readonly activator = new ConstructorActivator();

  /**
   * Current dependency resolution stack.
   */
  private readonly resolutionStack: ServiceIdentifier[] = [];

  /**
   * Runtime dependency graph.
   */
  private readonly dependencyGraph = new Map<
    ServiceIdentifier,
    ServiceIdentifier[]
  >();

  /**
   * Creates a new service resolver.
   */
  public constructor(private readonly registry: ServiceRegistry) {}

  /**
   * Returns the registered descriptor.
   */
  public resolveDescriptor<T>(
    identifier: ServiceIdentifier<T>,
  ): ServiceDescriptor<T> | undefined {
    return this.registry.get(identifier);
  }

  /**
   * Determines whether a service exists.
   */
  public has<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.registry.has(identifier);
  }

  /**
   * Activates a registered service.
   */
  public resolve<T>(
    provider: ServiceProvider,
    identifier: ServiceIdentifier<T>,
  ): T {
    // ---------------------------------------------------------
    // Circular dependency detection
    // ---------------------------------------------------------

    if (this.resolutionStack.includes(identifier)) {
      throw ActivationException.circularDependency(
        this.resolutionStack,
        identifier,
      );
    }

    const parent =
      this.resolutionStack.length > 0
        ? this.resolutionStack[this.resolutionStack.length - 1]
        : undefined;

    if (parent) {
      const children = this.dependencyGraph.get(parent);

      if (children) {
        children.push(identifier);
      } else {
        this.dependencyGraph.set(parent, [identifier]);
      }
    }

    this.resolutionStack.push(identifier);

    try {
      const descriptor = this.registry.get(identifier);

      if (!descriptor) {
        throw new ActivationException(
          `Service is not registered: ${String(identifier)}`,
        );
      }

      // Singleton cache.
      if (
        descriptor.lifetime === ServiceLifetime.Singleton &&
        this.registry.hasSingleton(identifier)
      ) {
        return this.registry.getSingleton(identifier)!;
      }

      // Scoped cache.
      if (
        descriptor.lifetime === ServiceLifetime.Scoped &&
        provider instanceof ServiceScope &&
        provider.has(identifier)
      ) {
        return provider.getInstance(identifier)!;
      }

      let instance: T;

      // Existing instance.
      if (descriptor.instance !== undefined) {
        instance = descriptor.instance;
      }
      // Factory registration.
      else if (descriptor.factory) {
        instance = descriptor.factory(provider);
      }
      // Constructor activation.
      else if (descriptor.implementation) {
        const context: ActivationContext<T> = {
          identifier,
          descriptor,
          provider,
          resolutionStack: this.resolutionStack,
          dependencyGraph: this.dependencyGraph,
        };

        instance = this.activator.activate(context);
      } else {
        throw new ActivationException(
          `Unable to activate service: ${String(identifier)}`,
        );
      }

      // Cache singleton.
      if (descriptor.lifetime === ServiceLifetime.Singleton) {
        this.registry.setSingleton(identifier, instance);
      }

      // Cache scoped instance.
      if (
        descriptor.lifetime === ServiceLifetime.Scoped &&
        provider instanceof ServiceScope
      ) {
        provider.setInstance(identifier, instance);
      }

      return instance;
    } finally {
      this.resolutionStack.pop();
    }
  }
}
