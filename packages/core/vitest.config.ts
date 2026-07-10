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
