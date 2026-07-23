/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Prompt Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   DefaultPromptFactory.ts
 *
 * Description:
 *   Default runtime implementation of the PromptFactory contract.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Immutable Prompt creation
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { Prompt } from "./Prompt";
import type { PromptDescriptor } from "./PromptDescriptor";
import type { PromptFactory } from "./PromptFactory";
import type { PromptMetadata } from "./PromptMetadata";
import type { PromptTemplate } from "./PromptTemplate";

/**
 * Default PromptFactory implementation.
 */
export class DefaultPromptFactory implements PromptFactory {
  /**
   * Creates an immutable Prompt instance.
   *
   * @param descriptor Prompt descriptor.
   * @param template Prompt template.
   * @param metadata Prompt metadata.
   * @returns Immutable Prompt.
   */
  create(
    descriptor: PromptDescriptor,
    template: PromptTemplate,
    metadata: PromptMetadata,
  ): Prompt {
    return Object.freeze({
      id: descriptor.id,
      name: descriptor.title,
      description: descriptor.summary,
      descriptor,
      template,
      metadata,
    });
  }
}
