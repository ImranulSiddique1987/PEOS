/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Represents an orchestration request.
 */

import type { OrchestrationContext } from "./OrchestrationContext.js";

export interface OrchestrationRequest {
  /**
   * Request identifier.
   */
  readonly id: string;

  /**
   * Orchestration identifier.
   */
  readonly orchestrationId: string;

  /**
   * Execution context.
   */
  readonly context: OrchestrationContext;

  /**
   * Request payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;
}
