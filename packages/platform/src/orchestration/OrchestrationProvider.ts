/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Defines a provider responsible for resolving orchestration components.
 */

import type { Orchestration } from "./Orchestration.js";

export interface OrchestrationProvider {
  /**
   * Returns all registered orchestration components.
   */
  getOrchestrations(): readonly Orchestration[];

  /**
   * Returns an orchestration component by identifier.
   */
  getOrchestration(id: string): Orchestration | undefined;
}
