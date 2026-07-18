/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Describes a reasoning component.
 */

export interface ReasoningDescriptor {
  /**
   * Reasoning identifier.
   */
  readonly id: string;

  /**
   * Reasoning name.
   */
  readonly name: string;

  /**
   * Reasoning version.
   */
  readonly version: string;

  /**
   * Optional description.
   */
  readonly description?: string;
}
