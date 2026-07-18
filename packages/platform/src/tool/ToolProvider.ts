/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolProvider.ts
 *
 * Description:
 *   Defines the canonical Tool Provider contract for the PEOS Platform.
 *
 * A Tool Provider represents an abstract source capable of supplying immutable
 * Tool definitions. This contract defines the provider abstraction only and
 * introduces no runtime behavior, execution semantics, or provider-specific
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

import type { Tool } from "./Tool";

/**
 * Represents the canonical Tool Provider contract.
 */
export interface ToolProvider {
  /**
   * Globally unique provider identifier.
   */
  readonly id: string;

  /**
   * Human-readable provider name.
   */
  readonly name: string;

  /**
   * Optional provider description.
   */
  readonly description?: string;

  /**
   * Retrieves an immutable Tool by its identifier.
   *
   * This method defines the provider contract only and does not imply any
   * runtime behavior, storage mechanism, transport protocol, or execution
   * strategy.
   *
   * @param id Tool identifier.
   * @returns Immutable Tool contract.
   */
  getTool(id: string): Tool;
}
