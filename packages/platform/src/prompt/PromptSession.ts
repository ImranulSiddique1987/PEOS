/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptSession.ts
 *
 * Description:
 *   Defines the canonical Prompt Session contract for the PEOS Platform.
 *   A Prompt Session represents the immutable lifecycle context associated
 *   with prompt interactions. This contract defines structure only and
 *   introduces no runtime behavior, provider-specific implementation,
 *   or execution semantics.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { PromptContext } from "./PromptContext";
import type { PromptMetadata } from "./PromptMetadata";

/**
 * Represents the canonical Prompt Session contract.
 */
export interface PromptSession {
  /**
   * Globally unique session identifier.
   */
  readonly id: string;

  /**
   * Human-readable session name.
   */
  readonly name: string;

  /**
   * Optional session description.
   */
  readonly description?: string;

  /**
   * Immutable session context.
   */
  readonly context?: PromptContext;

  /**
   * Immutable session metadata.
   */
  readonly metadata?: PromptMetadata;

  /**
   * Optional session properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
