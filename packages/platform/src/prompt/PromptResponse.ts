/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptResponse.ts
 *
 * Description:
 *   Defines the canonical Prompt Response contract for the PEOS Platform.
 *   A Prompt Response represents the immutable result of resolving a Prompt
 *   request. This contract contains no runtime behavior and remains
 *   provider-neutral, framework-agnostic, and implementation-free.
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
import type { PromptMetadata } from "./PromptMetadata";

/**
 * Represents the canonical Prompt Response contract.
 */
export interface PromptResponse {
  /**
   * Globally unique response identifier.
   */
  readonly id: string;

  /**
   * Resolved Prompt contract.
   */
  readonly prompt: Prompt;

  /**
   * Optional response metadata.
   */
  readonly metadata?: PromptMetadata;

  /**
   * Optional response properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
