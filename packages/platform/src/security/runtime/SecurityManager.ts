import type { SecurityContext } from "../contracts/SecurityContext";
import type { SecurityProvider } from "../contracts/SecurityProvider";
import type { SecurityResult } from "../contracts/SecurityResult";
import { DefaultSecurityProvider } from "./DefaultSecurityProvider";

/**
 * Coordinates runtime security evaluation.
 */
export class SecurityManager {
  private readonly provider: SecurityProvider;

  /**
   * Creates a new SecurityManager.
   *
   * @param provider Optional runtime security provider.
   */
  public constructor(provider?: SecurityProvider) {
    this.provider = provider ?? new DefaultSecurityProvider();
  }

  /**
   * Evaluates the supplied runtime security context.
   *
   * @param context Runtime security context.
   * @returns Security evaluation result.
   */
  public async evaluate(context: SecurityContext): Promise<SecurityResult> {
    return this.provider.evaluate(context);
  }
}
