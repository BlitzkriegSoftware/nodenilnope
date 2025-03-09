"use strict";

/**
 * Requires
 */
import { describe, test, expect } from "@jest/globals";

describe("BangBang", () => {
  test("!!", () => {
    let a;
    let r = !!a;
    console.log(`!!${a} => ${r}`);
    expect(r).toBe(false);
    a = parseInt("a", 10); // NaN
    r = !!a;
    console.log(`!!${a} => ${r}`);
    expect(r).toBe(false);
    a = 0;
    r = !!a;
    console.log(`!!${a} => ${r}`);
    expect(r).toBe(false);
    a = false;
    r = !!a;
    console.log(`!!${a} => ${r}`);
    expect(r).toBe(false);
    a = null;
    r = !!a;
    console.log(`!!${a} => ${r}`);
    expect(r).toBe(false);
    a = "";
    r = !!a;
    console.log(`!!${a} => ${r} (empty string)`);
    expect(r).toBe(false);
  });
});

describe("Col-ease", () => {
  test("Default", () => {
    const waka = null;
    const r = waka ?? "default";
    expect(r).toBe("default");
    expect(r).not.toBeNull();
  });

  test("Throw if missing", () => {
    const t = () => {
      const waka = null;
      if (waka == null) throw new Error("Missing");
    };
    expect(t).toThrowError("Missing");
  });
});
