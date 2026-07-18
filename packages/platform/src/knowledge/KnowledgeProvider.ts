import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";

/**
 * Represents a provider capable of supplying knowledge instances.
 *
 * Providers expose framework-agnostic contracts only. Runtime-specific
 * implementations belong to higher layers of the platform.
 */
export interface KnowledgeProvider {
  /**
   * Unique provider identifier.
   */
  readonly id: string;

  /**
   * Human-readable provider name.
   */
  readonly name: string;

  /**
   * Creates or resolves a knowledge instance.
   *
   * @param context Optional knowledge context.
   * @returns A knowledge contract.
   */
  getKnowledge(context?: KnowledgeContext): Knowledge;
}
