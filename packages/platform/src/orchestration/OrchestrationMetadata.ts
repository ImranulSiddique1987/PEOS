/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Metadata associated with an orchestration component.
 */

export interface OrchestrationMetadata {
  /**
   * Orchestration author.
   */
  readonly author?: string;

  /**
   * Orchestration tags.
   */
  readonly tags: readonly string[];

  /**
   * Additional metadata.
   */
  readonly properties: Readonly<Record<string, unknown>>;
}
