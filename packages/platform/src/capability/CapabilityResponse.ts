/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Represents the response returned by a platform capability.
 */

export interface CapabilityResponse {
  /**
   * Response identifier.
   */
  readonly id: string;

  /**
   * Indicates whether the request completed successfully.
   */
  readonly success: boolean;

  /**
   * Response payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;

  /**
   * Optional status message.
   */
  readonly message?: string;
}
