/**
 * Represents the runtime security context.
 */
export interface SecurityContext {
  /**
   * Unique security subject identifier.
   */
  readonly subject: string;

  /**
   * Runtime environment associated with the security context.
   */
  readonly environment: string;

  /**
   * Arbitrary immutable security metadata.
   */
  readonly attributes: Readonly<Record<string, unknown>>;
}
