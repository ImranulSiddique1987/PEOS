/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { RuntimeMetadata } from "./RuntimeMetadata.js";

type RuntimeImplementation = new (...arguments_: unknown[]) => unknown;

/**
 * Central registry for runtime metadata.
 *
 * Responsibilities:
 * - Register runtime metadata.
 * - Retrieve runtime metadata.
 * - Remove runtime metadata.
 * - Query registered implementations.
 *
 * Future Evolution:
 * - Immutable snapshots.
 * - Module isolation.
 * - Plugin registration.
 * - Workflow registration.
 * - Runtime diagnostics.
 */
export class MetadataRegistry {
  /**
   * Registered runtime metadata.
   */
  private readonly metadata = new Map<RuntimeImplementation, RuntimeMetadata>();

  /**
   * Registers runtime metadata.
   */
  public register<T>(metadata: RuntimeMetadata<T>): void {
    this.metadata.set(metadata.implementation, metadata);
  }

  /**
   * Returns runtime metadata.
   */
  public get<T>(
    implementation: new (...arguments_: unknown[]) => T,
  ): RuntimeMetadata<T> | undefined {
    return this.metadata.get(implementation) as RuntimeMetadata<T> | undefined;
  }

  /**
   * Determines whether metadata exists.
   */
  public has<T>(implementation: new (...arguments_: unknown[]) => T): boolean {
    return this.metadata.has(implementation);
  }

  /**
   * Removes runtime metadata.
   */
  public remove<T>(
    implementation: new (...arguments_: unknown[]) => T,
  ): boolean {
    return this.metadata.delete(implementation);
  }

  /**
   * Removes all registered metadata.
   */
  public clear(): void {
    this.metadata.clear();
  }

  /**
   * Returns all registered metadata.
   */
  public values(): readonly RuntimeMetadata[] {
    return [...this.metadata.values()];
  }

  /**
   * Returns the number of registered metadata entries.
   */
  public get size(): number {
    return this.metadata.size;
  }
}
