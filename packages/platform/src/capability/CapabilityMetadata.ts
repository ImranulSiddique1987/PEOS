/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Metadata associated with a capability.
 */

export interface CapabilityMetadata {
  /**
   * Capability author.
   */
  readonly author?: string;

  /**
   * Capability tags.
   */
  readonly tags: readonly string[];

  /**
   * Additional metadata.
   */
  readonly properties: Readonly<Record<string, unknown>>;
}
