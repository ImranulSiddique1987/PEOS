import type { Runtime } from "./Runtime.js";
import type { RuntimeStatus } from "./RuntimeStatus.js";

/**
 * Represents the immutable runtime state.
 */
export interface RuntimeState {
  /**
   * Runtime instance.
   */
  readonly runtime: Runtime;

  /**
   * Current runtime status.
   */
  readonly status: RuntimeStatus;

  /**
   * Time when the runtime state was created.
   */
  readonly timestamp: Date;

  /**
   * Optional status message.
   */
  readonly message?: string;

  /**
   * Optional runtime error.
   */
  readonly error?: Error;
}
