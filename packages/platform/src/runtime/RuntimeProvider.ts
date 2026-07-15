import type { Runtime } from "./Runtime.js";

/**
 * Represents a provider capable of supplying a Platform Runtime.
 *
 * This contract intentionally avoids prescribing how a runtime is created,
 * resolved, executed, activated, cached, or managed.
 */
export interface RuntimeProvider {
  /**
   * Returns the current platform runtime.
   */
  getRuntime(): Runtime;
}
