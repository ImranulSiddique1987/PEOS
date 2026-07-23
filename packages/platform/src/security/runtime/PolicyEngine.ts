import type { PolicyEvaluator } from "../contracts/PolicyEvaluator";
import type { SecurityContext } from "../contracts/SecurityContext";
import type { SecurityPolicy } from "../contracts/SecurityPolicy";
import type { SecurityResult } from "../contracts/SecurityResult";
import { DefaultPolicyEvaluator } from "./DefaultPolicyEvaluator";

/**
 * Coordinates runtime security policy evaluation.
 */
export class PolicyEngine {
  private readonly evaluator: PolicyEvaluator;

  /**
   * Creates a new PolicyEngine.
   *
   * @param evaluator Optional policy evaluator implementation.
   */
  public constructor(evaluator?: PolicyEvaluator) {
    this.evaluator = evaluator ?? new DefaultPolicyEvaluator();
  }

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
    return this.evaluator.evaluate(context, policies);
  }
}
