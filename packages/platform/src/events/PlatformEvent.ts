/**
 * PEOS Platform
 * Shared Platform Event Contracts Foundation
 *
 * M-040
 */

export interface PlatformEvent<TPayload = unknown> {
  /**
   * Globally unique event name.
   *
   * Example:
   * peos.workflow.created
   * peos.plugin.loaded
   */
  readonly type: string;

  /**
   * Event payload.
   */
  readonly payload: TPayload;
}
