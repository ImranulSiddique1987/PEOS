import type { Retrieval } from "./Retrieval";
import type { RetrievalContext } from "./RetrievalContext";

/**
 * Represents a provider capable of supplying retrieval instances.
 *
 * Providers expose framework-agnostic contracts only. Runtime-specific
 * implementations belong to higher layers of the platform.
 */
export interface RetrievalProvider {
  /**
   * Unique provider identifier.
   */
  readonly id: string;

  /**
   * Human-readable provider name.
   */
  readonly name: string;

  /**
   * Creates or resolves a retrieval instance.
   *
   * @param context Optional retrieval context.
   * @returns A retrieval contract.
   */
  getRetrieval(context?: RetrievalContext): Retrieval;
}
