/**
 * PEOS Platform
 * Workflow Contract
 *
 * Defines the canonical abstraction for a Platform Workflow.
 *
 * A Workflow represents the composed workflow boundary that coordinates
 * platform capabilities through contracts only.
 *
 * This interface intentionally contains no runtime behavior or
 * implementation details. Concrete implementations are introduced
 * in future milestones.
 */

import type { WorkflowDescriptor } from "./WorkflowDescriptor.js";

/**
 * Represents a composed Platform Workflow.
 */
export interface Workflow {
  /**
   * Immutable metadata describing this workflow.
   */
  readonly descriptor: WorkflowDescriptor;
}
