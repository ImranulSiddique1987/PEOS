/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceDescriptor } from "./ServiceDescriptor.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import type { ServiceProvider } from "./ServiceProvider.js";

/**
 * Represents the runtime context for a service activation.
 *
 * Responsibilities:
 * - Provide the requested service identifier.
 * - Provide the resolved service descriptor.
 * - Provide access to the service provider.
 * - Expose runtime dependency resolution state.
 *
 * Non-Responsibilities:
 * - Service resolution
 * - Object construction
 * - Lifetime management
 */
export interface ActivationContext<T = unknown> {
  /**
   * Requested service identifier.
   */
  readonly identifier: ServiceIdentifier<T>;

  /**
   * Resolved service descriptor.
   */
  readonly descriptor: ServiceDescriptor<T>;

  /**
   * Runtime service provider.
   */
  readonly provider: ServiceProvider;

  /**
   * Current dependency resolution stack.
   *
   * The stack represents the active resolution path from the
   * root service to the current activation request.
   */
  readonly resolutionStack: readonly ServiceIdentifier[];

  /**
   * Dependency graph captured during the current resolution.
   *
   * Key   -> Parent service
   * Value -> Immediate child dependencies
   */
  readonly dependencyGraph: ReadonlyMap<
    ServiceIdentifier,
    readonly ServiceIdentifier[]
  >;
}
