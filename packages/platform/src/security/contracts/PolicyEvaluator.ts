import type { SecurityContext } from "./SecurityContext";
import type { SecurityPolicy } from "./SecurityPolicy";
import type { SecurityResult } from "./SecurityResult";

/**
 * Evaluates one or more security policies for a runtime security context.
 */
export interface PolicyEvaluator {
  /**
   * Evaluates the supplied policies against the provided security context.
   *
   * @param context Runtime security context.
   * @param policies Security policies to evaluate.
   * @returns Security evaluation result.
   */
  evaluate(
    context: SecurityContext,
    policies: readonly SecurityPolicy[],
  ): Promise<SecurityResult>;
}
