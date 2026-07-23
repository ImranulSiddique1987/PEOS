import type { SecurityContext } from "../contracts/SecurityContext";
import type { SecurityProvider } from "../contracts/SecurityProvider";
import type { SecurityResult } from "../contracts/SecurityResult";

/**
 * Default runtime security provider.
 *
 * This provider performs the baseline runtime security evaluation and
 * currently allows all requests. Future milestones (authentication,
 * authorization, policy engine, etc.) will extend this behavior.
 */
export class DefaultSecurityProvider implements SecurityProvider {
  /**
   * Evaluates the supplied runtime security context.
   *
   * @param context Runtime security context.
   * @returns Security evaluation result.
   */
  public async evaluate(context: SecurityContext): Promise<SecurityResult> {
    void context;

    return Object.freeze({
      allowed: true,
    });
  }
}
