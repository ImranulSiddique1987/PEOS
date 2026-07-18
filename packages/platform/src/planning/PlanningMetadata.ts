/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Metadata associated with a planning component.
 */

export interface PlanningMetadata {
  /**
   * Planning author.
   */
  readonly author?: string;

  /**
   * Planning tags.
   */
  readonly tags: readonly string[];

  /**
   * Additional metadata.
   */
  readonly properties: Readonly<Record<string, unknown>>;
}
