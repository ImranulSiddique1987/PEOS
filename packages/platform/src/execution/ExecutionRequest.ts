/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Represents an execution request.
 */

import type { ExecutionContext } from "./ExecutionContext.js";

export interface ExecutionRequest {
  /**
   * Request identifier.
   */
  readonly id: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Execution context.
   */
  readonly context: ExecutionContext;

  /**
   * Request payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;
}
