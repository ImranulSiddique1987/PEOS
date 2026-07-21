/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ConstructorMetadata } from "./ConstructorMetadata.js";
import type { DependencyDescriptor } from "./DependencyDescriptor.js";
import type { RuntimeMetadata } from "./RuntimeMetadata.js";

/**
 * Builds runtime metadata.
 *
 * Responsibilities:
 * - Produce runtime metadata.
 * - Produce constructor metadata.
 * - Preserve dependency ordering.
 * - Create immutable metadata objects.
 *
 * Future Evolution:
 * - Automatic dependency discovery.
 * - Compiler-generated metadata.
 * - AOT metadata generation.
 * - Runtime metadata validation.
 */
export class MetadataBuilder {
  /**
   * Builds runtime metadata.
   */
  public build<T>(
    implementation: new (...arguments_: unknown[]) => T,
    dependencies: readonly DependencyDescriptor[] = [],
  ): RuntimeMetadata<T> {
    const constructorMetadata: ConstructorMetadata<T> = {
      constructor: implementation,
      dependencies: [...dependencies],
      parameterCount: dependencies.length,
    };

    return {
      implementation,
      constructor: constructorMetadata,
      name: implementation.name,
    };
  }
}
