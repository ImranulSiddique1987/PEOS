import type { Memory } from "./Memory";
import type { MemoryContext } from "./MemoryContext";

/**
 * Represents an active memory session.
 *
 * A memory session provides contextual access to a memory instance
 * without defining any runtime behavior or storage implementation.
 */
export interface MemorySession {
  /**
   * Unique session identifier.
   */
  readonly id: string;

  /**
   * Associated memory.
   */
  readonly memory: Memory;

  /**
   * Session context.
   */
  readonly context?: MemoryContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
