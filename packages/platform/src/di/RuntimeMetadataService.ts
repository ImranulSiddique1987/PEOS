/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import { MetadataBuilder } from "./MetadataBuilder.js";
import { MetadataRegistry } from "./MetadataRegistry.js";
import type { DependencyDescriptor } from "./DependencyDescriptor.js";
import type { RuntimeMetadata } from "./RuntimeMetadata.js";

/**
 * Runtime metadata orchestration service.
 *
 * Responsibilities:
 * - Build runtime metadata.
 * - Register runtime metadata.
 * - Retrieve runtime metadata.
 * - Remove runtime metadata.
 * - Query registered implementations.
 *
 * Future Evolution:
 * - Automatic metadata discovery.
 * - Reflection integration.
 * - Plugin metadata.
 * - Workflow metadata.
 * - Agent metadata.
 * - Runtime diagnostics.
 * - Metadata caching.
 */
export class RuntimeMetadataService {
  /**
   * Runtime metadata builder.
   */
  private readonly builder = new MetadataBuilder();

  /**
   * Runtime metadata registry.
   */
  private readonly registry = new MetadataRegistry();

  /**
   * Builds and registers runtime metadata.
   */
  public register<T>(
    implementation: new (...arguments_: unknown[]) => T,
    dependencies: readonly DependencyDescriptor[] = [],
  ): RuntimeMetadata<T> {
    const metadata = this.builder.build(implementation, dependencies);

    this.registry.register(metadata);

    return metadata;
  }

  /**
   * Returns registered runtime metadata.
   */
  public get<T>(
    implementation: new (...arguments_: unknown[]) => T,
  ): RuntimeMetadata<T> | undefined {
    return this.registry.get(implementation);
  }

  /**
   * Determines whether runtime metadata exists.
   */
  public has<T>(implementation: new (...arguments_: unknown[]) => T): boolean {
    return this.registry.has(implementation);
  }

  /**
   * Removes runtime metadata.
   */
  public remove<T>(
    implementation: new (...arguments_: unknown[]) => T,
  ): boolean {
    return this.registry.remove(implementation);
  }

  /**
   * Removes all runtime metadata.
   */
  public clear(): void {
    this.registry.clear();
  }

  /**
   * Returns all registered runtime metadata.
   */
  public values(): readonly RuntimeMetadata[] {
    return this.registry.values();
  }

  /**
   * Returns the number of registered runtime metadata entries.
   */
  public get size(): number {
    return this.registry.size;
  }
}
