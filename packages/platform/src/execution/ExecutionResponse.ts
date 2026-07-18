/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Represents an execution response.
 */

export interface ExecutionResponse {
  /**
   * Response identifier.
   */
  readonly id: string;

  /**
   * Indicates whether execution completed successfully.
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
