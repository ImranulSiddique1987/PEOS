/**
 * PEOS Platform
 * Workflow Provider Contract
 *
 * Defines the contract for resolving Platform Workflow instances.
 *
 * A provider is responsible only for exposing an existing Platform
 * Workflow abstraction. It does not define creation, lifecycle, or
 * execution semantics.
 */

import type { Workflow } from "./Workflow.js";

/**
 * Provider contract for resolving Platform Workflow instances.
 */
export interface WorkflowProvider {
  /**
   * Resolves the current Platform Workflow.
   *
   * @returns A Platform Workflow instance.
   */
  getWorkflow(): Workflow;
}
