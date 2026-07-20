import type { Runtime } from "./Runtime.js";
import type { RuntimeStatus } from "./RuntimeStatus.js";

/**
 * Represents a runtime lifecycle event.
 */
export interface RuntimeEvent {
  /**
   * Event identifier.
   */
  readonly id: string;

  /**
   * Event name.
   */
  readonly type: string;

  /**
   * Associated runtime.
   */
  readonly runtime: Runtime;

  /**
   * Runtime status when the event occurred.
   */
  readonly status: RuntimeStatus;

  /**
   * Event creation time.
   */
  readonly timestamp: Date;

  /**
   * Optional event payload.
   */
  readonly payload?: Readonly<Record<string, unknown>>;
}
