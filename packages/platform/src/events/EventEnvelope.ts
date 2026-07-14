/**
 * PEOS Platform
 * Shared Platform Event Contracts Foundation
 *
 * M-040
 */

import type { EventMetadata } from "./EventMetadata";
import type { PlatformEvent } from "./PlatformEvent";

export interface EventEnvelope<TPayload = unknown> {
  /**
   * Event metadata.
   */
  readonly metadata: EventMetadata;

  /**
   * Event payload.
   */
  readonly event: PlatformEvent<TPayload>;
}
