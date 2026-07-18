import type { Retrieval } from "./Retrieval";
import type { RetrievalContext } from "./RetrievalContext";

/**
 * Factory contract responsible for creating retrieval instances.
 *
 * Implementations are provided by runtime layers. The Platform package
 * defines only the contract.
 */
export interface RetrievalFactory {
  /**
   * Creates a retrieval instance.
   *
   * @param context Optional retrieval context.
   * @returns A retrieval contract.
   */
  create(context?: RetrievalContext): Retrieval;
}
