import type { RetrievalContext } from "./RetrievalContext";

/**
 * Represents a retrieval session within the platform.
 *
 * A retrieval session groups related retrieval operations under a
 * common identifier while remaining provider-neutral and runtime-free.
 */
export interface RetrievalSession {
  /**
   * Unique session identifier.
   */
  readonly id: string;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;

  /**
   * Optional retrieval context associated with the session.
   */
  readonly context?: RetrievalContext;

  /**
   * Additional provider-specific session properties.
   */
  readonly properties?: Readonly<Record<string, unknown>>;
}
