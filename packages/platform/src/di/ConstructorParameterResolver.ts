import { ServiceProvider } from "./ServiceProvider.js";
import { ConstructorMetadata } from "./ConstructorMetadata.js";

/**
 * Resolves constructor arguments from runtime metadata.
 *
 * This class is responsible only for converting constructor
 * dependency metadata into the argument array required by the
 * activator. It does not instantiate objects.
 */
export class ConstructorParameterResolver {
  public resolve(
    provider: ServiceProvider,
    metadata: ConstructorMetadata,
  ): readonly unknown[] {
    if (metadata.dependencies.length === 0) {
      return [];
    }

    const arguments_: unknown[] = [];

    for (const dependency of metadata.dependencies) {
      try {
        const value = provider.get(dependency.identifier);
        arguments_.push(value);
      } catch (error) {
        if (dependency.optional) {
          arguments_.push(undefined);
          continue;
        }

        throw error;
      }
    }

    return arguments_;
  }
}
