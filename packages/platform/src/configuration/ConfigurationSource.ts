/**
 * PEOS Configuration Source
 *
 * Defines the contract representing the origin of platform
 * configuration.
 *
 * This contract describes configuration sources without
 * prescribing how configuration is retrieved.
 *
 * Runtime implementations are introduced in future milestones.
 */

/**
 * Represents the origin of platform configuration.
 */
export interface ConfigurationSource {
  /**
   * Unique source identifier.
   */
  readonly id: string;

  /**
   * Human-readable source name.
   */
  readonly name: string;

  /**
   * Source type.
   *
   * Examples:
   * - environment
   * - file
   * - memory
   * - remote
   */
  readonly type: string;

  /**
   * Indicates whether the source is currently available.
   */
  readonly enabled: boolean;
}
