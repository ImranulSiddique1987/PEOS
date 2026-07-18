/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptProvider.ts
 *
 * Description:
 *   Defines the canonical Prompt Provider contract for the PEOS Platform.
 *   A Prompt Provider represents an abstract source capable of supplying
 *   immutable Prompt definitions. This contract is provider-neutral and
 *   introduces no runtime behavior or implementation details.
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

/**
 * Represents the canonical Prompt Provider contract.
 */
export interface PromptProvider {
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
   * Retrieves an immutable Prompt by its identifier.
   *
   * This method defines the provider contract only and does not imply any
   * runtime behavior, storage mechanism, or transport protocol.
   *
   * @param id Prompt identifier.
   * @returns Immutable Prompt contract.
   */
  getPrompt(id: string): Prompt;
}
