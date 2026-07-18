/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolMetadata.ts
 *
 * Description:
 *   Defines the canonical Tool Metadata contract for the PEOS Platform.
 *
 * Tool Metadata provides immutable descriptive information associated with a
 * Tool while remaining independent of any runtime, framework, provider,
 * or implementation.
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
 * Represents the canonical Tool Metadata contract.
 */
export interface ToolMetadata {
  /**
   * Tool author or owner.
   */
  readonly author?: string;

  /**
   * Tool version.
   */
  readonly version?: string;

  /**
   * Tool creation timestamp (ISO 8601).
   */
  readonly createdAt?: string;

  /**
   * Tool last modification timestamp (ISO 8601).
   */
  readonly updatedAt?: string;

  /**
   * Tool classification tags.
   */
  readonly tags?: readonly string[];

  /**
   * Optional custom metadata.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
