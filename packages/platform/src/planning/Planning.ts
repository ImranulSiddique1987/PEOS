/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Defines the core abstraction representing a planning component.
 */

import type { PlanningContext } from "./PlanningContext.js";
import type { PlanningDescriptor } from "./PlanningDescriptor.js";
import type { PlanningMetadata } from "./PlanningMetadata.js";

export interface Planning {
  /**
   * Unique planning identifier.
   */
  readonly id: string;

  /**
   * Human-readable planning name.
   */
  readonly name: string;

  /**
   * Planning descriptor.
   */
  readonly descriptor: PlanningDescriptor;

  /**
   * Planning metadata.
   */
  readonly metadata: PlanningMetadata;

  /**
   * Initializes the planning component.
   */
  initialize(context: PlanningContext): Promise<void>;

  /**
   * Disposes the planning component.
   */
  dispose(): Promise<void>;
}
