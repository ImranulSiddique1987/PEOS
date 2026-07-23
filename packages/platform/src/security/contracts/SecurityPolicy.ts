/**
 * Represents a runtime security policy.
 */
export interface SecurityPolicy {
  /**
   * Unique policy identifier.
   */
  readonly id: string;

  /**
   * Human-readable policy name.
   */
  readonly name: string;

  /**
   * Indicates whether the policy is enabled.
   */
  readonly enabled: boolean;
}
