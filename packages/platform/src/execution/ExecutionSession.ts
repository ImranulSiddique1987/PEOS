/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Represents an active execution session.
 */

import type { ExecutionContext } from "./ExecutionContext.js";

export interface ExecutionSession {
  /**
   * Session identifier.
   */
  readonly id: string;

  /**
   * Execution identifier.
   */
  readonly executionId: string;

  /**
   * Session context.
   */
  readonly context: ExecutionContext;

  /**
   * Session creation timestamp.
   */
  readonly createdAt: Date;
}
