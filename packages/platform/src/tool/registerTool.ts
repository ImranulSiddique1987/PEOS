/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Tool Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   registerTool.ts
 *
 * Description:
 *   Helper function for registering Tool contracts into the Tool Runtime.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { Tool } from "./Tool";
import { ToolRuntime } from "./ToolRuntime";

/**
 * Registers a Tool with the specified ToolRuntime.
 *
 * @param runtime Tool runtime.
 * @param tool Tool contract.
 */
export function registerTool(runtime: ToolRuntime, tool: Tool): void {
  runtime.register(tool);
}
