/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Tool Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolRegistry.ts
 *
 * Description:
 *   Enterprise runtime registry responsible for storing immutable Tool
 *   contract instances.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Provider neutral
 *   - Framework agnostic
 *   - Service Container compatible
 * =============================================================================
 */

import type { Tool } from "./Tool";

/**
 * Runtime registry for Tool definitions.
 */
export class ToolRegistry {
  private readonly tools = new Map<string, Tool>();

  /**
   * Registers a Tool.
   *
   * @param tool Tool contract.
   */
  register(tool: Tool): void {
    this.tools.set(tool.id, tool);
  }

  /**
   * Determines whether a Tool exists.
   *
   * @param id Tool identifier.
   */
  has(id: string): boolean {
    return this.tools.has(id);
  }

  /**
   * Retrieves a Tool.
   *
   * @param id Tool identifier.
   */
  get(id: string): Tool | undefined {
    return this.tools.get(id);
  }

  /**
   * Returns all registered Tools.
   */
  getAll(): readonly Tool[] {
    return [...this.tools.values()];
  }

  /**
   * Removes a Tool.
   *
   * @param id Tool identifier.
   */
  unregister(id: string): boolean {
    return this.tools.delete(id);
  }

  /**
   * Clears the registry.
   */
  clear(): void {
    this.tools.clear();
  }

  /**
   * Number of registered tools.
   */
  get size(): number {
    return this.tools.size;
  }
}
