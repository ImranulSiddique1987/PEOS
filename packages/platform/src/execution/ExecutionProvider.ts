/**
 * PEOS Platform
 * Shared Platform Execution Contracts Foundation
 *
 * Defines a provider responsible for resolving execution components.
 */

import type { Execution } from "./Execution.js";

export interface ExecutionProvider {
  /**
   * Returns all registered execution components.
   */
  getExecutions(): readonly Execution[];

  /**
   * Returns an execution component by identifier.
   */
  getExecution(id: string): Execution | undefined;
}
