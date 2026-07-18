/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Represents a reasoning response.
 */

export interface ReasoningResponse {
  /**
   * Response identifier.
   */
  readonly id: string;

  /**
   * Indicates whether reasoning completed successfully.
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
