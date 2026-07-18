/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Represents a request sent to a platform capability.
 */

import type { CapabilityContext } from "./CapabilityContext.js";

export interface CapabilityRequest {
  /**
   * Request identifier.
   */
  readonly id: string;

  /**
   * Capability being requested.
   */
  readonly capabilityId: string;

  /**
   * Execution context.
   */
  readonly context: CapabilityContext;

  /**
   * Request payload.
   */
  readonly payload: Readonly<Record<string, unknown>>;
}
