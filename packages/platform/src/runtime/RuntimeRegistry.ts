import type { Runtime } from "./Runtime.js";
import { RuntimeError, RuntimeNotFoundError } from "./RuntimeErrors.js";

/**
 * Central registry for Platform Runtime instances.
 *
 * RuntimeRegistry is responsible for registering, resolving,
 * querying and removing runtime instances.
 *
 * It intentionally avoids lifecycle management,
 * activation, scheduling and orchestration responsibilities.
 */
export class RuntimeRegistry {
  private readonly runtimes = new Map<string, Runtime>();

  /**
   * Registers a runtime.
   *
   * @throws RuntimeError if a runtime with the same identifier already exists.
   */
  public register(runtime: Runtime): void {
    if (this.runtimes.has(runtime.id)) {
      throw new RuntimeError(`Runtime '${runtime.id}' is already registered.`);
    }

    this.runtimes.set(runtime.id, runtime);
  }

  /**
   * Resolves a runtime by identifier.
   *
   * @throws RuntimeNotFoundError if no runtime exists.
   */
  public resolve(id: string): Runtime {
    const runtime = this.runtimes.get(id);

    if (!runtime) {
      throw new RuntimeNotFoundError(id);
    }

    return runtime;
  }

  /**
   * Determines whether a runtime exists.
   */
  public has(id: string): boolean {
    return this.runtimes.has(id);
  }

  /**
   * Removes a runtime.
   *
   * Returns true when removed.
   */
  public unregister(id: string): boolean {
    return this.runtimes.delete(id);
  }

  /**
   * Removes every registered runtime.
   */
  public clear(): void {
    this.runtimes.clear();
  }

  /**
   * Returns every registered runtime.
   */
  public getAll(): readonly Runtime[] {
    return Object.freeze([...this.runtimes.values()]);
  }

  /**
   * Number of registered runtimes.
   */
  public get size(): number {
    return this.runtimes.size;
  }
}
