/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolResponse.ts
 *
 * Description:
 *   Defines the canonical Tool Response contract for the PEOS Platform.
 *
 * A Tool Response represents the immutable result of resolving a Tool
 * request. This contract defines structure only and introduces no runtime
 * behavior, execution semantics, or provider-specific implementation.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { Tool } from "./Tool";
import type { ToolMetadata } from "./ToolMetadata";

/**
 * Represents the canonical Tool Response contract.
 */
export interface ToolResponse {
  /**
   * Globally unique response identifier.
   */
  readonly id: string;

  /**
   * Resolved Tool contract.
   */
  readonly tool: Tool;

  /**
   * Optional response metadata.
   */
  readonly metadata?: ToolMetadata;

  /**
   * Optional response properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
