/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceCollection } from "./ServiceCollection.js";
import type { ServiceDescriptor } from "./ServiceDescriptor.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import { ServiceProvider } from "./ServiceProvider.js";
import { ServiceRegistry } from "./ServiceRegistry.js";
import { ServiceResolver } from "./ServiceResolver.js";
import { ServiceScope } from "./ServiceScope.js";

/**
 * Default runtime implementation of the PEOS service container.
 *
 * Responsibilities:
 * - Store service registrations.
 * - Resolve registered services.
 * - Coordinate the registry and resolver.
 * - Create logical service scopes.
 *
 * Non-Responsibilities:
 * - Constructor injection
 * - Circular dependency detection
 * - Advanced scope hierarchy
 */
export class ServiceContainer implements ServiceCollection, ServiceProvider {
  private readonly registry: ServiceRegistry;

  private readonly resolver: ServiceResolver;

  /**
   * Creates a new service container.
   */
  public constructor() {
    this.registry = new ServiceRegistry();
    this.resolver = new ServiceResolver(this.registry);
  }

  /**
   * Registers a service descriptor.
   */
  public add(descriptor: ServiceDescriptor): this {
    this.registry.register(descriptor);
    return this;
  }

  /**
   * Resolves a required service.
   */
  public get<T>(identifier: ServiceIdentifier<T>): T {
    return this.resolver.resolve(this, identifier);
  }

  /**
   * Attempts to resolve an optional service.
   */
  public tryGet<T>(identifier: ServiceIdentifier<T>): T | undefined {
    try {
      return this.get(identifier);
    } catch {
      return undefined;
    }
  }

  /**
   * Determines whether a service has been registered.
   */
  public has<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.registry.has(identifier);
  }

  /**
   * Removes a registration.
   */
  public remove<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.registry.remove(identifier);
  }

  /**
   * Removes every registration.
   */
  public clear(): void {
    this.registry.clear();
  }

  /**
   * Returns every registered descriptor.
   */
  public descriptors(): readonly ServiceDescriptor[] {
    return this.registry.values();
  }

  /**
   * Creates a new logical service scope.
   */
  public createScope(): ServiceScope {
    return new ServiceScope(this.resolver);
  }

  /**
   * Returns the total number of registrations.
   */
  public get size(): number {
    return this.registry.size;
  }
}
