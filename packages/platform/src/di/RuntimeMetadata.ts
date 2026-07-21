/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ConstructorMetadata } from "./ConstructorMetadata.js";

/**
 * Represents runtime metadata for an implementation.
 *
 * Responsibilities:
 * - Describe an implementation type.
 * - Expose activation metadata.
 * - Provide runtime identity.
 *
 * Future Evolution:
 * - Lifetime metadata.
 * - Interceptor metadata.
 * - Attribute metadata.
 * - Plugin metadata.
 * - Workflow metadata.
 * - Agent metadata.
 */
export interface RuntimeMetadata<T = unknown> {
  /**
   * Runtime implementation type.
   */
  readonly implementation: new (...arguments_: unknown[]) => T;

  /**
   * Constructor metadata used for activation.
   */
  readonly constructor: ConstructorMetadata<T>;

  /**
   * Fully-qualified runtime name.
   */
  readonly name: string;
}
