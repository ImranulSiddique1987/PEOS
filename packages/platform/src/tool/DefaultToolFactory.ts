/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Tool Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   DefaultToolFactory.ts
 *
 * Description:
 *   Default runtime implementation of the ToolFactory contract.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Immutable Tool creation
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { Tool } from "./Tool";
import type { ToolDescriptor } from "./ToolDescriptor";
import type { ToolFactory } from "./ToolFactory";
import type { ToolMetadata } from "./ToolMetadata";
import type { ToolSpecification } from "./ToolSpecification";

/**
 * Default ToolFactory implementation.
 */
export class DefaultToolFactory implements ToolFactory {
  /**
   * Creates an immutable Tool instance.
   *
   * @param descriptor Tool descriptor.
   * @param specification Tool specification.
   * @param metadata Tool metadata.
   * @returns Immutable Tool.
   */
  create(
    descriptor: ToolDescriptor,
    specification: ToolSpecification,
    metadata: ToolMetadata,
  ): Tool {
    return Object.freeze({
      id: descriptor.id,
      name: descriptor.title,
      description: descriptor.summary,
      descriptor,
      specification,
      metadata,
    });
  }
}
