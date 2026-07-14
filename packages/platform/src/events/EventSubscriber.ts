/**
 * PEOS Platform
 * Shared Platform Event Contracts Foundation
 *
 * M-040
 */

export interface EventSubscriber {
  /**
   * Returns the event types supported by this subscriber.
   */
  readonly eventTypes: readonly string[];
}
