/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { DependencyDescriptor } from "./DependencyDescriptor.js";

/**
 * Represents runtime metadata for an activation constructor.
 *
 * Responsibilities:
 * - Describe the activation constructor.
 * - Preserve dependency ordering.
 * - Expose constructor metadata to the runtime.
 *
 * Future Evolution:
 * - Preferred constructors.
 * - Constructor visibility.
 * - Constructor attributes.
 * - Generic constructors.
 */
export interface ConstructorMetadata<T = unknown> {
  /**
   * Constructor used for activation.
   */
  readonly constructor: new (...arguments_: unknown[]) => T;

  /**
   * Runtime dependency descriptors.
   */
  readonly dependencies: readonly DependencyDescriptor[];

  /**
   * Number of constructor parameters.
   */
  readonly parameterCount: number;
}
