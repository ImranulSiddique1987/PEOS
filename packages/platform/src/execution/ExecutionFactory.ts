/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Factory responsible for creating execution components.
 */

import type { Execution } from "./Execution.js";
import type { ExecutionDescriptor } from "./ExecutionDescriptor.js";

export interface ExecutionFactory {
  /**
   * Creates an execution component from its descriptor.
   */
  create(descriptor: ExecutionDescriptor): Execution;
}
