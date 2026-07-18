/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolRequest.ts
 *
 * Description:
 *   Defines the canonical Tool Request contract for the PEOS Platform.
 *
 * A Tool Request represents an immutable request to discover, resolve,
 * or invoke a Tool contract without prescribing runtime behavior,
 * execution semantics, or provider-specific implementations.
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
 * Represents the canonical Tool Request contract.
 */
export interface ToolRequest {
  /**
   * Globally unique request identifier.
   */
  readonly id: string;

  /**
   * Identifier of the requested Tool.
   */
  readonly toolId: string;

  /**
   * Optional Tool Context associated with the request.
   */
  readonly context?: ToolContext;

  /**
   * Immutable request metadata.
   */
  readonly metadata?: ToolMetadata;

  /**
   * Optional request properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
