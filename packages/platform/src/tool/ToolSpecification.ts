/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolSpecification.ts
 *
 * Description:
 *   Defines the canonical Tool Specification contract for the PEOS Platform.
 *
 * A Tool Specification describes the immutable capabilities, inputs,
 * outputs, and operational characteristics of a Tool without introducing
 * runtime behavior, execution semantics, or provider-specific details.
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
 * Represents the canonical Tool Specification contract.
 */
export interface ToolSpecification {
  /**
   * Globally unique specification identifier.
   */
  readonly id: string;

  /**
   * Human-readable specification name.
   */
  readonly name: string;

  /**
   * Optional specification description.
   */
  readonly description?: string;

  /**
   * Tool input schema or contract.
   */
  readonly input?: Readonly<Record<string, unknown>>;

  /**
   * Tool output schema or contract.
   */
  readonly output?: Readonly<Record<string, unknown>>;

  /**
   * Optional capability tags.
   */
  readonly capabilities?: readonly string[];
}
