import type { AgentCapability } from "./AgentCapability";
import type { AgentMetadata } from "./AgentMetadata";

/**
 * Represents an immutable agent descriptor.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentDescriptor {
  /**
   * Unique agent identifier.
   */
  readonly id: string;

  /**
   * Agent name.
   */
  readonly name: string;

  /**
   * Optional agent version.
   */
  readonly version?: string;

  /**
   * Supported capabilities.
   */
  readonly capabilities?: ReadonlyArray<AgentCapability>;

  /**
   * Optional metadata.
   */
  readonly metadata?: AgentMetadata;
}
