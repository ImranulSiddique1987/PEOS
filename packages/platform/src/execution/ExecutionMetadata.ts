/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Metadata associated with an execution component.
 */

export interface ExecutionMetadata {
  /**
   * Execution author.
   */
  readonly author?: string;

  /**
   * Execution tags.
   */
  readonly tags: readonly string[];

  /**
   * Additional metadata.
   */
  readonly properties: Readonly<Record<string, unknown>>;
}
