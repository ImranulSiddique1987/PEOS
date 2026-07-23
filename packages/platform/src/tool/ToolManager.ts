/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Tool Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolManager.ts
 *
 * Description:
 *   High-level runtime service responsible for managing Tool registration
 *   and resolution operations.
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
import { ToolRuntime } from "./ToolRuntime";

/**
 * High-level Tool runtime manager.
 */
export class ToolManager {
  /**
   * Creates a new ToolManager.
   *
   * @param runtime Tool runtime.
   */
  constructor(private readonly runtime: ToolRuntime = new ToolRuntime()) {}

  /**
   * Registers a Tool.
   *
   * @param tool Tool contract.
   */
  register(tool: Tool): void {
    this.runtime.register(tool);
  }

  /**
   * Resolves a Tool by identifier.
   *
   * @param id Tool identifier.
   * @returns Tool if found; otherwise undefined.
   */
  resolve(id: string): Tool | undefined {
    return this.runtime.resolve(id);
  }

  /**
   * Determines whether a Tool exists.
   *
   * @param id Tool identifier.
   */
  has(id: string): boolean {
    return this.runtime.has(id);
  }

  /**
   * Returns all registered Tools.
   */
  getAll(): readonly Tool[] {
    return this.runtime.getAll();
  }

  /**
   * Removes a Tool.
   *
   * @param id Tool identifier.
   */
  unregister(id: string): boolean {
    return this.runtime.unregister(id);
  }

  /**
   * Clears all registered Tools.
   */
  clear(): void {
    this.runtime.clear();
  }

  /**
   * Returns the underlying runtime.
   */
  getRuntime(): ToolRuntime {
    return this.runtime;
  }
}
