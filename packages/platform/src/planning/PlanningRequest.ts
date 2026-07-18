/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Represents a planning request.
 */

import type { PlanningContext } from "./PlanningContext.js";

export interface PlanningRequest {
  /**
   * Request identifier.
   */
  readonly id: string;

  /**
   * Planning identifier.
   */
  readonly planningId: string;

  /**
   * Planning context.
   */
  readonly context: PlanningContext;

  /**
   * Request payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;
}
