/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptRequest.ts
 *
 * Description:
 *   Defines the canonical Prompt Request contract for the PEOS Platform.
 *   A Prompt Request represents an immutable request to obtain or resolve
 *   a Prompt definition without prescribing any runtime behavior,
 *   provider-specific implementation, or execution semantics.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { PromptContext } from "./PromptContext";
import type { PromptMetadata } from "./PromptMetadata";

/**
 * Represents the canonical Prompt Request contract.
 */
export interface PromptRequest {
  /**
   * Globally unique request identifier.
   */
  readonly id: string;

  /**
   * Identifier of the requested Prompt.
   */
  readonly promptId: string;

  /**
   * Optional Prompt Context associated with the request.
   */
  readonly context?: PromptContext;

  /**
   * Immutable request metadata.
   */
  readonly metadata?: PromptMetadata;

  /**
   * Optional request properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
