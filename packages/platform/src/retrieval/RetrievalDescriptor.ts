import type { RetrievalMetadata } from "./RetrievalMetadata";

/**
 * Describes a retrieval contract exposed by the platform.
 *
 * A descriptor provides immutable metadata that identifies and
 * classifies a retrieval implementation without prescribing any
 * runtime behavior.
 */
export interface RetrievalDescriptor {
  /**
   * Unique identifier of the retrieval component.
   */
  readonly id: string;

  /**
   * Human-readable name.
   */
  readonly name: string;

  /**
   * Optional description.
   */
  readonly description?: string;

  /**
   * Retrieval version.
   */
  readonly version: string;

  /**
   * Additional metadata.
   */
  readonly metadata?: RetrievalMetadata;
}
