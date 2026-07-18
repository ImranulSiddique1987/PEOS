/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptFactory.ts
 *
 * Description:
 *   Defines the canonical Prompt Factory contract responsible for producing
 *   immutable Prompt contract instances. This interface specifies the factory
 *   abstraction only and contains no runtime behavior or implementation.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { Prompt } from "./Prompt";
import type { PromptDescriptor } from "./PromptDescriptor";
import type { PromptTemplate } from "./PromptTemplate";
import type { PromptMetadata } from "./PromptMetadata";

/**
 * Represents the canonical Prompt Factory contract.
 */
export interface PromptFactory {
  /**
   * Creates a Prompt contract.
   *
   * @param descriptor Immutable prompt descriptor.
   * @param template Immutable prompt template.
   * @param metadata Immutable prompt metadata.
   * @returns Immutable Prompt contract.
   */
  create(
    descriptor: PromptDescriptor,
    template: PromptTemplate,
    metadata: PromptMetadata,
  ): Prompt;
}
