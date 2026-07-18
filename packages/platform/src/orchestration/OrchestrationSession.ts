/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Represents an active orchestration session.
 */

import type { OrchestrationContext } from "./OrchestrationContext.js";

export interface OrchestrationSession {
  /**
   * Session identifier.
   */
  readonly id: string;

  /**
   * Orchestration identifier.
   */
  readonly orchestrationId: string;

  /**
   * Session context.
   */
  readonly context: OrchestrationContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
