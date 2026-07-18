/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolDescriptor.ts
 *
 * Description:
 *   Defines the canonical Tool Descriptor contract for the PEOS Platform.
 *
 * A Tool Descriptor provides immutable descriptive information about a Tool
 * without introducing runtime behavior, provider-specific details, or
 * implementation concerns.
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
 * Represents the canonical Tool Descriptor contract.
 */
export interface ToolDescriptor {
  /**
   * Globally unique descriptor identifier.
   */
  readonly id: string;

  /**
   * Human-readable tool title.
   */
  readonly title: string;

  /**
   * Optional tool summary.
   */
  readonly summary?: string;

  /**
   * Tool version.
   */
  readonly version: string;

  /**
   * Tool category.
   */
  readonly category?: string;

  /**
   * Tool classification tags.
   */
  readonly tags?: readonly string[];
}
