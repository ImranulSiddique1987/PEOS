/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   Prompt.ts
 *
 * Description:
 *   Defines the canonical Prompt contract for the PEOS Platform.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { PromptDescriptor } from "./PromptDescriptor";
import type { PromptMetadata } from "./PromptMetadata";
import type { PromptTemplate } from "./PromptTemplate";

/**
 * Represents the canonical Prompt contract.
 *
 * A Prompt encapsulates the immutable definition of a reusable prompt
 * independent of any AI provider, runtime, framework, or execution engine.
 */
export interface Prompt {
  /**
   * Globally unique prompt identifier.
   */
  readonly id: string;

  /**
   * Human-readable prompt name.
   */
  readonly name: string;

  /**
   * Optional prompt description.
   */
  readonly description?: string;

  /**
   * Prompt descriptor.
   */
  readonly descriptor: PromptDescriptor;

  /**
   * Prompt template definition.
   */
  readonly template: PromptTemplate;

  /**
   * Prompt metadata.
   */
  readonly metadata: PromptMetadata;
}
