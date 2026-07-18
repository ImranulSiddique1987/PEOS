/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptContext.ts
 *
 * Description:
 *   Defines the canonical Prompt Context contract used to represent the
 *   immutable execution context associated with a prompt.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { PromptMetadata } from "./PromptMetadata";

/**
 * Represents the canonical Prompt Context contract.
 *
 * A Prompt Context provides immutable contextual information that may
 * accompany a prompt throughout higher-level platform workflows without
 * introducing runtime behavior or provider-specific implementations.
 */
export interface PromptContext {
  /**
   * Globally unique context identifier.
   */
  readonly id: string;

  /**
   * Human-readable context name.
   */
  readonly name: string;

  /**
   * Optional context description.
   */
  readonly description?: string;

  /**
   * Immutable prompt variables.
   */
  readonly variables: Readonly<Record<string, unknown>>;

  /**
   * Context metadata.
   */
  readonly metadata: PromptMetadata;
}
