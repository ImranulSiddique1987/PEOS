/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ActivationContext } from "./ActivationContext.js";
import { ConstructorActivator } from "./ConstructorActivator.js";
import type { ServiceDescriptor } from "./ServiceDescriptor.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import { ServiceLifetime } from "./ServiceLifetime.js";
import type { ServiceProvider } from "./ServiceProvider.js";
import { ServiceRegistry } from "./ServiceRegistry.js";

/**
 * Runtime service resolver.
 *
 * Responsibilities:
 * - Locate registered service descriptors.
 * - Activate registered services.
 * - Execute factory registrations.
 * - Delegate implementation activation.
 * - Manage singleton caching.
 *
 * Future Milestones:
 * - Constructor injection
 * - Scoped lifetimes
 * - Circular dependency detection
 * - Disposal
 */
export class ServiceResolver {
  /**
   * Runtime constructor activator.
   */
  private readonly activator = new ConstructorActivator();

  /**
   * Creates a new service resolver.
   *
   * @param registry Runtime service registry.
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
    const descriptor = this.registry.get(identifier);

    if (!descriptor) {
      throw new Error(`Service is not registered: ${String(identifier)}`);
    }

    // Return cached singleton.
    if (
      descriptor.lifetime === ServiceLifetime.Singleton &&
      this.registry.hasSingleton(identifier)
    ) {
      return this.registry.getSingleton(identifier)!;
    }

    let instance: T;

    // Pre-created instance.
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
      };

      instance = this.activator.activate(context);
    } else {
      throw new Error(`Unable to activate service: ${String(identifier)}`);
    }

    // Cache singleton instances.
    if (descriptor.lifetime === ServiceLifetime.Singleton) {
      this.registry.setSingleton(identifier, instance);
    }

    return instance;
  }
}
