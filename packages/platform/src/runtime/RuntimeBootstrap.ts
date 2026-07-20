import type { Runtime } from "./Runtime.js";
import type { RuntimeState } from "./RuntimeState.js";
import { RuntimeManager } from "./RuntimeManager.js";

/**
 * Bootstraps the Platform Runtime.
 *
 * RuntimeBootstrap provides a single entry point for creating the
 * initial runtime state. It deliberately avoids performing activation,
 * dependency resolution, scheduling or orchestration.
 */
export class RuntimeBootstrap {
  private readonly manager: RuntimeManager;

  /**
   * Creates a RuntimeBootstrap.
   */
  public constructor(manager?: RuntimeManager) {
    this.manager = manager ?? new RuntimeManager();
  }

  /**
   * Registers and bootstraps a runtime.
   */
  public bootstrap(runtime: Runtime): RuntimeState {
    let state = this.manager.register(runtime);

    state = this.manager.lifecycleManager.initialize(state);
    state = this.manager.lifecycleManager.initialized(state);

    return state;
  }

  /**
   * Returns the runtime manager.
   */
  public get runtimeManager(): RuntimeManager {
    return this.manager;
  }
}
