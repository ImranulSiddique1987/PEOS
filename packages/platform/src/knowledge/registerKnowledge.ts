import type { KnowledgeProvider } from "./KnowledgeProvider";
import { KnowledgeRuntime } from "./KnowledgeRuntime";

/**
 * Registers a knowledge provider with the specified Knowledge Runtime.
 *
 * This helper provides a simple registration entry point while keeping
 * the runtime implementation independent from any dependency injection
 * container or application framework.
 *
 * @param runtime Knowledge runtime instance.
 * @param provider Knowledge provider to register.
 */
export function registerKnowledge(
  runtime: KnowledgeRuntime,
  provider: KnowledgeProvider,
): void {
  runtime.register(provider);
}
