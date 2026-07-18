/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Describes a planning component.
 */

export interface PlanningDescriptor {
  /**
   * Planning identifier.
   */
  readonly id: string;

  /**
   * Planning name.
   */
  readonly name: string;

  /**
   * Planning version.
   */
  readonly version: string;

  /**
   * Optional description.
   */
  readonly description?: string;
}
