import type { Runtime } from "./Runtime.js";
import type { RuntimeFactory } from "./RuntimeFactory.js";
import type { RuntimeProvider } from "./RuntimeProvider.js";
import { RuntimeActivationError, RuntimeError } from "./RuntimeErrors.js";

/**
 * Responsible for activating Platform Runtime instances.
 *
 * RuntimeActivator creates runtime instances using RuntimeFactory
 * and exposes helper methods for providers.
 *
 * It intentionally avoids lifecycle management,
 * orchestration and scheduling.
 */
export class RuntimeActivator {
  /**
   * Creates a runtime from a RuntimeFactory.
   */
  public activate(factory: RuntimeFactory): Runtime {
    try {
      return factory.create();
    } catch (error) {
      throw new RuntimeActivationError(
        factory.descriptor.id,
        error instanceof Error ? error : new RuntimeError(String(error)),
      );
    }
  }

  /**
   * Retrieves the active runtime from a provider.
   */
  public resolve(provider: RuntimeProvider): Runtime {
    return provider.getRuntime();
  }

  /**
   * Determines whether a runtime provider can successfully
   * provide a runtime.
   */
  public isActive(provider: RuntimeProvider): boolean {
    try {
      provider.getRuntime();
      return true;
    } catch {
      return false;
    }
  }
}
