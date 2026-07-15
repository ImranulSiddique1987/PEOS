import type { Runtime } from "./Runtime.js";
import type { RuntimeDescriptor } from "./RuntimeDescriptor.js";

/**
 * Defines a contract for creating Platform Runtime instances.
 *
 * Runtime construction, execution, activation, initialization, scheduling,
 * and lifecycle management are intentionally outside the scope of this
 * contract.
 */
export interface RuntimeFactory {
  /**
   * Metadata describing the runtime produced by this factory.
   */
  readonly descriptor: RuntimeDescriptor;

  /**
   * Creates a platform runtime.
   */
  create(): Runtime;
}
