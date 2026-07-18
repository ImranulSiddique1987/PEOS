/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolContext.ts
 *
 * Description:
 *   Defines the canonical Tool Context contract for the PEOS Platform.
 *
 * A Tool Context represents immutable contextual information associated with
 * a Tool throughout higher-level platform workflows without introducing
 * runtime behavior or provider-specific implementations.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { ToolMetadata } from "./ToolMetadata";

/**
 * Represents the canonical Tool Context contract.
 */
export interface ToolContext {
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
   * Immutable context variables.
   */
  readonly variables: Readonly<Record<string, unknown>>;

  /**
   * Context metadata.
   */
  readonly metadata: ToolMetadata;
}
