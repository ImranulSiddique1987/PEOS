/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolFactory.ts
 *
 * Description:
 *   Defines the canonical Tool Factory contract for the PEOS Platform.
 *
 * A Tool Factory is responsible for producing immutable Tool contracts.
 * This interface specifies the factory abstraction only and introduces no
 * runtime behavior or implementation details.
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
import type { ToolDescriptor } from "./ToolDescriptor";
import type { ToolMetadata } from "./ToolMetadata";
import type { ToolSpecification } from "./ToolSpecification";

/**
 * Represents the canonical Tool Factory contract.
 */
export interface ToolFactory {
  /**
   * Creates a Tool contract.
   *
   * @param descriptor Immutable tool descriptor.
   * @param specification Immutable tool specification.
   * @param metadata Immutable tool metadata.
   * @returns Immutable Tool contract.
   */
  create(
    descriptor: ToolDescriptor,
    specification: ToolSpecification,
    metadata: ToolMetadata,
  ): Tool;
}
