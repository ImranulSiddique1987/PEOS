/**
 * PEOS Platform
 * Shared Platform Event Contracts Foundation
 *
 * M-040
 */

import type { EventEnvelope } from "./EventEnvelope";

export interface EventHandler<TPayload = unknown> {
  /**
   * Handles an event.
   */
  handle(event: EventEnvelope<TPayload>): Promise<void>;
}
