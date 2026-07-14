/**
 * PEOS Platform
 * Shared Platform Event Contracts Foundation
 *
 * M-040
 */

import type { EventEnvelope } from "./EventEnvelope";

export interface EventPublisher {
  /**
   * Publishes an event.
   */
  publish<TPayload>(event: EventEnvelope<TPayload>): Promise<void>;
}
