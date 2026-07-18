/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Represents an active reasoning session.
 */

import type { ReasoningContext } from "./ReasoningContext.js";

export interface ReasoningSession {
  /**
   * Session identifier.
   */
  readonly id: string;

  /**
   * Reasoning identifier.
   */
  readonly reasoningId: string;

  /**
   * Session context.
   */
  readonly context: ReasoningContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
