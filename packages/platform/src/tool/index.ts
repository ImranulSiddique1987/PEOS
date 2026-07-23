/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Tool Contracts & Runtime Foundation
 * -----------------------------------------------------------------------------
 * Barrel exports for the Tool module.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Contract Exports                                                           */
/* -------------------------------------------------------------------------- */

export type { Tool } from "./Tool";
export type { ToolContext } from "./ToolContext";
export type { ToolDescriptor } from "./ToolDescriptor";
export type { ToolFactory } from "./ToolFactory";
export type { ToolMetadata } from "./ToolMetadata";
export type { ToolProvider } from "./ToolProvider";
export type { ToolRequest } from "./ToolRequest";
export type { ToolResponse } from "./ToolResponse";
export type { ToolSession } from "./ToolSession";
export type { ToolSpecification } from "./ToolSpecification";

/* -------------------------------------------------------------------------- */
/* Runtime Exports                                                            */
/* -------------------------------------------------------------------------- */

export { DefaultToolFactory } from "./DefaultToolFactory";
export { ToolManager } from "./ToolManager";
export { ToolRegistry } from "./ToolRegistry";
export { ToolResolver } from "./ToolResolver";
export { ToolRuntime } from "./ToolRuntime";
export { registerTool } from "./registerTool";
