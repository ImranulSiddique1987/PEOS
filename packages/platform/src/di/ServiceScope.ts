/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { Disposable } from "./Disposable.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import type { ServiceProvider } from "./ServiceProvider.js";
import { ServiceResolver } from "./ServiceResolver.js";

/**
 * Represents a logical dependency injection scope.
 *
 * Responsibilities:
 * - Provide scoped service resolution.
 * - Cache scoped service instances.
 * - Dispose cached scoped services.
 *
 * Non-Responsibilities:
 * - Service registration
 * - Singleton lifetime management
 * - Constructor injection
 * - Circular dependency detection
 */
export class ServiceScope implements Disposable, ServiceProvider {
  /**
   * Scoped instance cache.
   */
  private readonly instances = new Map<ServiceIdentifier, unknown>();

  /**
   * Creates a new service scope.
   *
   * @param resolver Runtime resolver.
   */
  public constructor(private readonly resolver: ServiceResolver) {}

  /**
   * Resolves a required service.
   */
  public get<T>(identifier: ServiceIdentifier<T>): T {
    return this.resolver.resolve(this, identifier);
  }

  /**
   * Resolves an optional service.
   */
  public tryGet<T>(identifier: ServiceIdentifier<T>): T | undefined {
    try {
      return this.get(identifier);
    } catch {
      return undefined;
    }
  }

  /**
   * Determines whether the scope contains
   * a cached service instance.
   */
  public has<T>(identifier: ServiceIdentifier<T>): boolean {
    return this.instances.has(identifier);
  }

  /**
   * Returns a cached scoped instance.
   */
  public getInstance<T>(identifier: ServiceIdentifier<T>): T | undefined {
    return this.instances.get(identifier) as T | undefined;
  }

  /**
   * Stores a scoped instance.
   */
  public setInstance<T>(identifier: ServiceIdentifier<T>, instance: T): void {
    this.instances.set(identifier, instance);
  }

  /**
   * Disposes every cached scoped instance.
   */
  public dispose(): void {
    for (const instance of this.instances.values()) {
      if (
        instance &&
        typeof instance === "object" &&
        "dispose" in instance &&
        typeof (instance as Disposable).dispose === "function"
      ) {
        (instance as Disposable).dispose();
      }
    }

    this.instances.clear();
  }
}
