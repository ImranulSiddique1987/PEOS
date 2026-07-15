import type { Service } from "./Service.js";
import type { ServiceDescriptor } from "../di/index.js";

/**
 * Defines a contract for creating Platform Services.
 *
 * This interface specifies the shape of future service factories without
 * prescribing any runtime implementation, dependency injection, or
 * lifecycle behavior.
 */
export interface ServiceFactory {
  /**
   * Metadata describing the service produced by this factory.
   */
  readonly descriptor: ServiceDescriptor;

  /**
   * Creates a service instance.
   *
   * The creation strategy is intentionally undefined and will be provided
   * by future runtime implementations.
   */
  create(): Service;
}
