/**
 * PEOS Platform
 * Shared Platform Planning Contracts Foundation
 *
 * Represents a planning response.
 */

export interface PlanningResponse {
  /**
   * Response identifier.
   */
  readonly id: string;

  /**
   * Indicates whether planning succeeded.
   */
  readonly success: boolean;

  /**
   * Response payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;

  /**
   * Optional message.
   */
  readonly message?: string;
}
