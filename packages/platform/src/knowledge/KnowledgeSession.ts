import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";

/**
 * Represents an active knowledge session.
 *
 * A knowledge session provides contextual access to a knowledge
 * instance without defining any runtime behavior or storage
 * implementation.
 */
export interface KnowledgeSession {
  /**
   * Unique session identifier.
   */
  readonly id: string;

  /**
   * Associated knowledge source.
   */
  readonly knowledge: Knowledge;

  /**
   * Session context.
   */
  readonly context?: KnowledgeContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
