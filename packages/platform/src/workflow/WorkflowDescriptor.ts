/**
 * PEOS Platform
 * Workflow Descriptor Contract
 *
 * Describes immutable metadata for a Platform Workflow.
 *
 * This contract contains descriptive information only and introduces
 * no runtime behavior.
 */

/**
 * Immutable metadata describing a Platform Workflow.
 */
export interface WorkflowDescriptor {
  /**
   * Unique workflow identifier.
   */
  readonly id: string;

  /**
   * Human-readable workflow name.
   */
  readonly name: string;

  /**
   * Workflow version.
   */
  readonly version: string;

  /**
   * Optional workflow description.
   */
  readonly description?: string;
}
