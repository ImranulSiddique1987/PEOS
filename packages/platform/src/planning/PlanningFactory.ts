/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Factory responsible for creating planning components.
 */

import type { Planning } from "./Planning.js";
import type { PlanningDescriptor } from "./PlanningDescriptor.js";

export interface PlanningFactory {
  /**
   * Creates a planning component from its descriptor.
   */
  create(descriptor: PlanningDescriptor): Planning;
}
