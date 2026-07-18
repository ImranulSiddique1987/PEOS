/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Represents an active capability session.
 */

import type { CapabilityContext } from "./CapabilityContext.js";

export interface CapabilitySession {
  /**
   * Session identifier.
   */
  readonly id: string;

  /**
   * Capability identifier.
   */
  readonly capabilityId: string;

  /**
   * Session context.
   */
  readonly context: CapabilityContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
