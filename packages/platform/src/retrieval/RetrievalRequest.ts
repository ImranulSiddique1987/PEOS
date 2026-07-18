import type { RetrievalContext } from "./RetrievalContext";
import type { RetrievalQuery } from "./RetrievalQuery";

/**
 * Represents a request submitted to a retrieval provider.
 *
 * A retrieval request encapsulates the query together with the
 * contextual information required to perform a retrieval operation.
 * The contract is intentionally framework-agnostic and runtime-free.
 */
export interface RetrievalRequest {
  /**
   * Unique request identifier.
   */
  readonly id: string;

  /**
   * Retrieval query.
   */
  readonly query: RetrievalQuery;

  /**
   * Optional retrieval context.
   */
  readonly context?: RetrievalContext;

  /**
   * Additional provider-specific request properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
