/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Represents a reasoning request.
 */

import type { ReasoningContext } from "./ReasoningContext.js";

export interface ReasoningRequest {
  /**
   * Request identifier.
   */
  readonly id: string;

  /**
   * Reasoning identifier.
   */
  readonly reasoningId: string;

  /**
   * Execution context.
   */
  readonly context: ReasoningContext;

  /**
   * Request payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;
}
