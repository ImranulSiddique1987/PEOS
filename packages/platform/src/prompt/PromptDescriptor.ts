/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptDescriptor.ts
 *
 * Description:
 *   Defines the canonical Prompt Descriptor contract for the PEOS Platform.
 *   A Prompt Descriptor provides immutable descriptive information about a
 *   prompt without introducing runtime behavior or provider-specific details.
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
 * Represents the canonical Prompt Descriptor contract.
 */
export interface PromptDescriptor {
  /**
   * Globally unique descriptor identifier.
   */
  readonly id: string;

  /**
   * Human-readable prompt title.
   */
  readonly title: string;

  /**
   * Optional prompt summary.
   */
  readonly summary?: string;

  /**
   * Prompt version.
   */
  readonly version: string;

  /**
   * Prompt category.
   */
  readonly category?: string;

  /**
   * Prompt tags.
   */
  readonly tags?: readonly string[];
}
