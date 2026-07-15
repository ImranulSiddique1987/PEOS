/**
 * PEOS Platform
 * Workflow Factory Contract
 *
 * Defines the contract for creating Platform Workflow instances.
 *
 * This interface specifies creation semantics only and does not
 * prescribe any implementation details.
 */

import type { Workflow } from "./Workflow.js";
import type { WorkflowDescriptor } from "./WorkflowDescriptor.js";

/**
 * Factory contract for creating Platform Workflow instances.
 */
export interface WorkflowFactory {
  /**
   * Creates a Platform Workflow from the supplied descriptor.
   *
   * @param descriptor Immutable metadata describing the workflow.
   * @returns A Platform Workflow instance.
   */
  create(descriptor: WorkflowDescriptor): Workflow;
}
