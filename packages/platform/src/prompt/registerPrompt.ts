/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Prompt Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   registerPrompt.ts
 *
 * Description:
 *   Helper function for registering Prompt contracts into the Prompt Runtime.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Provider neutral
 *   - Framework agnostic
 * =============================================================================
 */

import type { Prompt } from "./Prompt";
import { PromptRuntime } from "./PromptRuntime";

/**
 * Registers a Prompt with the specified PromptRuntime.
 *
 * @param runtime Prompt runtime.
 * @param prompt Prompt contract.
 */
export function registerPrompt(runtime: PromptRuntime, prompt: Prompt): void {
  runtime.register(prompt);
}
