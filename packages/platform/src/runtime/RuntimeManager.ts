import type { Runtime } from "./Runtime.js";
import type { RuntimeState } from "./RuntimeState.js";
import { RuntimeStatus } from "./RuntimeStatus.js";
import { RuntimeLifecycle } from "./RuntimeLifecycle.js";
import { RuntimeRegistry } from "./RuntimeRegistry.js";

/**
 * Coordinates runtime registration and lifecycle progression.
 *
 * RuntimeManager orchestrates the runtime foundation while delegating
 * lifecycle transitions to RuntimeLifecycle and storage to RuntimeRegistry.
 * It intentionally avoids dependency injection, scheduling,
 * workflow execution and plugin management.
 */
export class RuntimeManager {
  private readonly lifecycle = new RuntimeLifecycle();

  private readonly registry = new RuntimeRegistry();

  /**
   * Registers a runtime and returns its initial state.
   */
  public register(runtime: Runtime): RuntimeState {
    this.registry.register(runtime);

    return Object.freeze({
      runtime,
      status: RuntimeStatus.CREATED,
      timestamp: new Date(),
    });
  }

  /**
   * Removes a runtime from the registry.
   */
  public unregister(runtimeId: string): boolean {
    return this.registry.unregister(runtimeId);
  }

  /**
   * Resolves a registered runtime.
   */
  public resolve(runtimeId: string): Runtime {
    return this.registry.resolve(runtimeId);
  }

  /**
   * Returns all registered runtimes.
   */
  public getRuntimes(): readonly Runtime[] {
    return this.registry.getAll();
  }

  /**
   * Returns the runtime registry.
   */
  public get registryInstance(): RuntimeRegistry {
    return this.registry;
  }

  /**
   * Returns the lifecycle manager.
   */
  public get lifecycleManager(): RuntimeLifecycle {
    return this.lifecycle;
  }
}
