/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Defines the core abstraction representing an execution component.
 */

import type { ExecutionContext } from "./ExecutionContext.js";
import type { ExecutionDescriptor } from "./ExecutionDescriptor.js";
import type { ExecutionMetadata } from "./ExecutionMetadata.js";

export interface Execution {
  /**
   * Unique execution identifier.
   */
  readonly id: string;

  /**
   * Human-readable execution name.
   */
  readonly name: string;

  /**
   * Execution descriptor.
   */
  readonly descriptor: ExecutionDescriptor;

  /**
   * Execution metadata.
   */
  readonly metadata: ExecutionMetadata;

  /**
   * Initializes the execution component.
   */
  initialize(context: ExecutionContext): Promise<void>;

  /**
   * Disposes the execution component.
   */
  dispose(): Promise<void>;
}
