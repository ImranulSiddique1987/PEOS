/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceDescriptor } from "./ServiceDescriptor.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";

/**
 * Runtime registry responsible for storing service descriptors
 * and runtime singleton instances.
 *
 * Responsibilities:
 * - Store service registrations.
 * - Lookup registered services.
 * - Determine registration existence.
 * - Enumerate registrations.
 * - Cache singleton instances.
 *
 * Non-Responsibilities:
 * - Service activation
 * - Dependency resolution
 * - Scoped lifetime management
 * - Constructor injection
 */
export class ServiceRegistry {
  private readonly descriptors = new Map<
    ServiceIdentifier,
    ServiceDescriptor
  >();

  /**
   * Runtime singleton cache.
   */
  private readonly singletons = new Map<ServiceIdentifier, unknown>();

  /**
   * Registers a service descriptor.
   *
   * Existing registrations are replaced.
   */
  public register(descriptor: ServiceDescriptor): void {
    this.descriptors.set(descriptor.identifier, descriptor);
  }

  /**
   * Returns a registered descriptor.
   */
  public get<T>(
    identifier: ServiceIdentifier<T>,
  ): ServiceDescriptor<T> | undefined {
    return this.descriptors.get(identifier) as ServiceDescriptor<T> | undefined;
  }

  /**
   * Determines whether a service is registered.
   */
  public has<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.descriptors.has(identifier);
  }

  /**
   * Stores a singleton instance.
   */
  public setSingleton<T>(identifier: ServiceIdentifier<T>, instance: T): void {
    this.singletons.set(identifier, instance);
  }

  /**
   * Returns a cached singleton instance.
   */
  public getSingleton<T>(identifier: ServiceIdentifier<T>): T | undefined {
    return this.singletons.get(identifier) as T | undefined;
  }

  /**
   * Determines whether a singleton instance exists.
   */
  public hasSingleton<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.singletons.has(identifier);
  }

  /**
   * Removes a registration.
   */
  public remove<T>(identifier: ServiceIdentifier<T>): boolean {
    this.singletons.delete(identifier);
    return this.descriptors.delete(identifier);
  }

  /**
   * Removes every registration and cached singleton.
   */
  public clear(): void {
    this.descriptors.clear();
    this.singletons.clear();
  }

  /**
   * Returns every registered descriptor.
   */
  public values(): readonly ServiceDescriptor[] {
    return [...this.descriptors.values()];
  }

  /**
   * Returns the total number of registrations.
   */
  public get size(): number {
    return this.descriptors.size;
  }
}
