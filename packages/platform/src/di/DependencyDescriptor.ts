/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceIdentifier } from "./ServiceIdentifier.js";

/**
 * Describes a single runtime dependency.
 *
 * Responsibilities:
 * - Represent one constructor dependency.
 * - Preserve dependency ordering.
 * - Carry dependency metadata.
 *
 * Future Evolution:
 * - Optional dependencies.
 * - Named dependencies.
 * - Keyed dependencies.
 * - Lazy dependencies.
 * - Enumerable dependencies.
 */
export interface DependencyDescriptor {
  /**
   * Zero-based constructor parameter index.
   */
  readonly index: number;

  /**
   * Service identifier.
   */
  readonly identifier: ServiceIdentifier;

  /**
   * Parameter name.
   */
  readonly name: string;

  /**
   * Indicates whether the dependency is optional.
   */
  readonly optional: boolean;
}
