import type { RetrievalDescriptor } from "./RetrievalDescriptor";
import type { RetrievalProvider } from "./RetrievalProvider";

/**
 * Represents a retrieval component within the platform.
 *
 * Retrieval implementations expose provider-neutral retrieval
 * capabilities through framework-agnostic contracts.
 */
export interface Retrieval {
  /**
   * Unique identifier of the retrieval component.
   */
  readonly id: string;

  /**
   * Human-readable name.
   */
  readonly name: string;

  /**
   * Retrieval descriptor.
   */
  readonly descriptor: RetrievalDescriptor;

  /**
   * Retrieval provider.
   */
  readonly provider: RetrievalProvider;
}
