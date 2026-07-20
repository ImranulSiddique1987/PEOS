import type { Runtime } from "./Runtime.js";

/**
 * Fluent builder for immutable Runtime instances.
 *
 * This builder provides a convenient mechanism
 * for constructing runtime objects while keeping
 * Runtime itself as a simple immutable contract.
 */
export class RuntimeBuilder {
  private id?: string;

  private name?: string;

  private properties: Record<string, unknown> = {};

  /**
   * Sets the runtime identifier.
   */
  public withId(id: string): this {
    this.id = id;
    return this;
  }

  /**
   * Sets the runtime name.
   */
  public withName(name: string): this {
    this.name = name;
    return this;
  }

  /**
   * Adds or replaces a runtime property.
   */
  public withProperty(key: string, value: unknown): this {
    this.properties[key] = value;
    return this;
  }

  /**
   * Adds multiple runtime properties.
   */
  public withProperties(properties: Readonly<Record<string, unknown>>): this {
    Object.assign(this.properties, properties);
    return this;
  }

  /**
   * Builds an immutable Runtime instance.
   */
  public build(): Runtime {
    if (!this.id) {
      throw new Error("Runtime id is required.");
    }

    if (!this.name) {
      throw new Error("Runtime name is required.");
    }

    return Object.freeze({
      id: this.id,
      name: this.name,
      properties: Object.freeze({
        ...this.properties,
      }),
    });
  }

  /**
   * Resets the builder.
   */
  public reset(): this {
    this.id = undefined;
    this.name = undefined;
    this.properties = {};

    return this;
  }
}
