/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Describes an execution component.
 */

export interface ExecutionDescriptor {
  /**
   * Execution identifier.
   */
  readonly id: string;

  /**
   * Execution name.
   */
  readonly name: string;

  /**
   * Execution version.
   */
  readonly version: string;

  /**
   * Optional description.
   */
  readonly description?: string;
}
