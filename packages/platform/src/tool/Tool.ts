/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   Tool.ts
 *
 * Description:
 *   Defines the canonical Tool contract for the PEOS Platform.
 *
 * A Tool represents an immutable platform capability abstraction that may be
 * discovered, described, and invoked by higher-level platform components
 * without introducing runtime behavior or provider-specific implementations.
 *
 * Design Principles:
 *   - Interface only
 *   - Immutable (readonly)
 *   - Runtime free
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { ToolDescriptor } from "./ToolDescriptor";
import type { ToolMetadata } from "./ToolMetadata";
import type { ToolSpecification } from "./ToolSpecification";

/**
 * Represents the canonical Tool contract.
 */
export interface Tool {
  /**
   * Globally unique tool identifier.
   */
  readonly id: string;

  /**
   * Human-readable tool name.
   */
  readonly name: string;

  /**
   * Optional tool description.
   */
  readonly description?: string;

  /**
   * Tool descriptor.
   */
  readonly descriptor: ToolDescriptor;

  /**
   * Tool specification.
   */
  readonly specification: ToolSpecification;

  /**
   * Tool metadata.
   */
  readonly metadata: ToolMetadata;
}
