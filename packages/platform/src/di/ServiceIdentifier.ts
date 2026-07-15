/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

/**
 * Represents a constructable service type.
 *
 * This contract intentionally avoids any dependency injection framework
 * assumptions and serves as a framework-agnostic constructor signature.
 */
export type ServiceConstructor<T = unknown> = abstract new (
  ...args: never[]
) => T;

/**
 * Represents a unique identifier for a service.
 *
 * Services may be identified by:
 *
 * - A string identifier
 * - A symbol identifier
 * - A constructable service type
 *
 * This contract defines identity only. It does not prescribe how services
 * are registered or resolved.
 *
 * Future Evolution (Deferred):
 * - Typed service tokens
 * - Keyed services
 * - Named services
 * - Versioned identifiers
 * - Plugin-scoped identifiers
 * - Agent-scoped identifiers
 */
export type ServiceIdentifier<T = unknown> =
  string | symbol | ServiceConstructor<T>;
