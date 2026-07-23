import type { SecurityContext } from "../contracts/SecurityContext";
import type { SecurityPolicy } from "../contracts/SecurityPolicy";
import type { SecurityProvider } from "../contracts/SecurityProvider";
import type { SecurityResult } from "../contracts/SecurityResult";
import { DefaultSecurityProvider } from "./DefaultSecurityProvider";
import { PolicyEngine } from "./PolicyEngine";

/**
 * Coordinates runtime security evaluation.
 */
export class SecurityManager {
  private readonly provider: SecurityProvider;
  private readonly policyEngine: PolicyEngine;

  /**
   * Creates a new SecurityManager.
   *
   * @param provider Optional runtime security provider.
   * @param policyEngine Optional runtime policy engine.
   */
  public constructor(provider?: SecurityProvider, policyEngine?: PolicyEngine) {
    this.provider = provider ?? new DefaultSecurityProvider();
    this.policyEngine = policyEngine ?? new PolicyEngine();
  }

  /**
   * Evaluates the supplied runtime security context.
   *
   * Policies are evaluated before delegating to the runtime security provider.
   *
   * @param context Runtime security context.
   * @param policies Optional security policies.
   * @returns Security evaluation result.
   */
  public async evaluate(
    context: SecurityContext,
    policies: readonly SecurityPolicy[] = [],
  ): Promise<SecurityResult> {
    const policyResult = await this.policyEngine.evaluate(context, policies);

    if (!policyResult.allowed) {
      return policyResult;
    }

    return this.provider.evaluate(context);
  }
}
