/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Defines a provider responsible for resolving reasoning components.
 */

import type { Reasoning } from "./Reasoning.js";

export interface ReasoningProvider {
  /**
   * Returns all registered reasoning components.
   */
  getReasonings(): readonly Reasoning[];

  /**
   * Returns a reasoning component by identifier.
   */
  getReasoning(id: string): Reasoning | undefined;
}
