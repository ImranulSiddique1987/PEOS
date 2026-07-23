import type { SecurityContext } from "./SecurityContext";
import type { SecurityResult } from "./SecurityResult";

/**
 * Defines the contract for runtime security providers.
 */
export interface SecurityProvider {
  /**
   * Evaluates the supplied security context.
   *
   * @param context Runtime security context.
   * @returns Security evaluation result.
   */
  evaluate(context: SecurityContext): Promise<SecurityResult>;
}
