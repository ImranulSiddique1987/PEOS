import { describe, expect, it } from "vitest";
import * as core from "./index";

describe("@peos/core", () => {
  it("should export the runtime library", () => {
    expect(core).toBeDefined();
  });
});
