# @peos/testing

Shared Vitest configuration for the PEOS monorepo.

## Purpose

This package centralizes the default Vitest configuration used by PEOS runtime packages.

The first consumer of this package is `@peos/core`.

Additional runtime packages should extend this shared configuration using Vitest's native `mergeConfig()` API.

## Usage

```ts
import { defineConfig, mergeConfig } from "vitest/config";
import sharedConfig from "@peos/testing";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    test: {
      environment: "node",
    },
  }),
);
```

## Notes

- This package provides the default PEOS Vitest configuration.
- Runtime packages should extend the shared configuration rather than replacing it.
- Package-specific configuration should be supplied through `mergeConfig()`.
