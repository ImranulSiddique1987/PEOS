/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolSession.ts
 *
 * Description:
 *   Defines the canonical Tool Session contract for the PEOS Platform.
 *
 * A Tool Session represents the immutable lifecycle context associated with
 * tool interactions. This contract defines structure only and introduces
 * no runtime behavior, execution semantics, or provider-specific
 * implementation details.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { ToolContext } from "./ToolContext";
import type { ToolMetadata } from "./ToolMetadata";

/**
 * Represents the canonical Tool Session contract.
 */
export interface ToolSession {
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
  readonly context?: ToolContext;

  /**
   * Immutable session metadata.
   */
  readonly metadata?: ToolMetadata;

  /**
   * Optional session properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
