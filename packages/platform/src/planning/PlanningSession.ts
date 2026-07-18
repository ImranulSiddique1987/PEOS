/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Represents an active planning session.
 */

import type { PlanningContext } from "./PlanningContext.js";

export interface PlanningSession {
  /**
   * Session identifier.
   */
  readonly id: string;

  /**
   * Planning identifier.
   */
  readonly planningId: string;

  /**
   * Session context.
   */
  readonly context: PlanningContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
