/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptMetadata.ts
 *
 * Description:
 *   Defines the canonical Prompt Metadata contract for the PEOS Platform.
 *   Metadata provides immutable descriptive information associated with a
 *   Prompt while remaining completely independent of any runtime, framework,
 *   provider, or implementation.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

/**
 * Represents the canonical Prompt Metadata contract.
 */
export interface PromptMetadata {
  /**
   * Prompt author or owner.
   */
  readonly author?: string;

  /**
   * Prompt version.
   */
  readonly version?: string;

  /**
   * Prompt creation timestamp (ISO 8601).
   */
  readonly createdAt?: string;

  /**
   * Prompt last modification timestamp (ISO 8601).
   */
  readonly updatedAt?: string;

  /**
   * Prompt classification tags.
   */
  readonly tags?: readonly string[];

  /**
   * Optional custom metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
