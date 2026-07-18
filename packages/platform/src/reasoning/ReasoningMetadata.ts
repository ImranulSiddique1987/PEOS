/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Metadata associated with a reasoning component.
 */

export interface ReasoningMetadata {
  /**
   * Reasoning author.
   */
  readonly author?: string;

  /**
   * Reasoning tags.
   */
  readonly tags: readonly string[];

  /**
   * Additional metadata.
   */
  readonly properties: Readonly<Record<string, unknown>>;
}
