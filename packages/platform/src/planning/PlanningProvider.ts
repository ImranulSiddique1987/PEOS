/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Defines a provider responsible for resolving planning components.
 */

import type { Planning } from "./Planning.js";

export interface PlanningProvider {
  /**
   * Returns all registered planning components.
   */
  getPlannings(): readonly Planning[];

  /**
   * Returns a planning component by identifier.
   */
  getPlanning(id: string): Planning | undefined;
}
