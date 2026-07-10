import { describe, expect, it } from "vitest";

import * as platform from "./index";

describe("@peos/platform", () => {
  it("should export the public platform API", () => {
    expect(platform).toBeDefined();
  });
});
