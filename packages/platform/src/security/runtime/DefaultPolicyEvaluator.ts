import type { PolicyEvaluator } from "../contracts/PolicyEvaluator";
import type { SecurityContext } from "../contracts/SecurityContext";
import type { SecurityPolicy } from "../contracts/SecurityPolicy";
import type { SecurityResult } from "../contracts/SecurityResult";

/**
 * Default runtime policy evaluator.
 *
 * This implementation provides the baseline policy evaluation behavior.
 * Future milestones will extend this evaluator with rule processing,
 * authorization logic, policy composition, and dynamic policy execution.
 */
export class DefaultPolicyEvaluator implements PolicyEvaluator {
  /**
   * Evaluates the supplied security policies.
   *
   * @param context Runtime security context.
   * @param policies Security policies to evaluate.
   * @returns Security evaluation result.
   */
  public async evaluate(
    context: SecurityContext,
    policies: readonly SecurityPolicy[],
  ): Promise<SecurityResult> {
    void context;
    void policies;

    return Object.freeze({
      allowed: true,
    });
  }
}
