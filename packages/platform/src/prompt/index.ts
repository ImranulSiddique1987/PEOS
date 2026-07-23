/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Shared Platform Prompt Contracts & Runtime Foundation
 * -----------------------------------------------------------------------------
 * Barrel exports for the Prompt module.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/* Contract Exports                                                           */
/* -------------------------------------------------------------------------- */

export type { Prompt } from "./Prompt";
export type { PromptContext } from "./PromptContext";
export type { PromptDescriptor } from "./PromptDescriptor";
export type { PromptFactory } from "./PromptFactory";
export type { PromptMetadata } from "./PromptMetadata";
export type { PromptProvider } from "./PromptProvider";
export type { PromptRequest } from "./PromptRequest";
export type { PromptResponse } from "./PromptResponse";
export type { PromptSession } from "./PromptSession";
export type { PromptTemplate } from "./PromptTemplate";

/* -------------------------------------------------------------------------- */
/* Runtime Exports                                                            */
/* -------------------------------------------------------------------------- */

export { DefaultPromptFactory } from "./DefaultPromptFactory";
export { PromptManager } from "./PromptManager";
export { PromptRegistry } from "./PromptRegistry";
export { PromptResolver } from "./PromptResolver";
export { PromptRuntime } from "./PromptRuntime";
export { registerPrompt } from "./registerPrompt";
