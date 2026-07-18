/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptTemplate.ts
 *
 * Description:
 *   Defines the canonical Prompt Template contract for the PEOS Platform.
 *   A Prompt Template represents the immutable template definition of a
 *   prompt independent of any AI provider, runtime, framework, or execution
 *   engine.
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
 * Represents the canonical Prompt Template contract.
 */
export interface PromptTemplate {
  /**
   * Globally unique template identifier.
   */
  readonly id: string;

  /**
   * Human-readable template name.
   */
  readonly name: string;

  /**
   * Optional template description.
   */
  readonly description?: string;

  /**
   * Immutable prompt template content.
   */
  readonly content: string;

  /**
   * Immutable template variables.
   */
  readonly variables?: readonly string[];
}
