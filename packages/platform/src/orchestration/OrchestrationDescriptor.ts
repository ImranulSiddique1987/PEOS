/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Describes an orchestration component.
 */

export interface OrchestrationDescriptor {
  /**
   * Orchestration identifier.
   */
  readonly id: string;

  /**
   * Orchestration name.
   */
  readonly name: string;

  /**
   * Orchestration version.
   */
  readonly version: string;

  /**
   * Optional description.
   */
  readonly description?: string;
}
