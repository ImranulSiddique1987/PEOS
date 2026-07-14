/**
 * PEOS Platform
 * Shared Platform Event Contracts Foundation
 *
 * M-040
 */

export interface EventMetadata {
  /**
   * Unique event identifier.
   */
  readonly id: string;

  /**
   * Event creation timestamp (UTC ISO-8601).
   */
  readonly timestamp: string;

  /**
   * Event specification version.
   */
  readonly version: string;

  /**
   * Event producer.
   */
  readonly source: string;

  /**
   * Correlation identifier.
   */
  readonly correlationId?: string;

  /**
   * Parent event identifier.
   */
  readonly causationId?: string;
}
