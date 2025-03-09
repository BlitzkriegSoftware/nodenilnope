"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Requires
 */
const globals_1 = require("@jest/globals");
(0, globals_1.describe)("BangBang", () => {
    (0, globals_1.test)("!!", () => {
        let a;
        let r = !!a;
        console.log(`!!${a} => ${r}`);
        (0, globals_1.expect)(r).toBe(false);
        a = parseInt("a", 10); // NaN
        r = !!a;
        console.log(`!!${a} => ${r}`);
        (0, globals_1.expect)(r).toBe(false);
        a = 0;
        r = !!a;
        console.log(`!!${a} => ${r}`);
        (0, globals_1.expect)(r).toBe(false);
        a = false;
        r = !!a;
        console.log(`!!${a} => ${r}`);
        (0, globals_1.expect)(r).toBe(false);
        a = null;
        r = !!a;
        console.log(`!!${a} => ${r}`);
        (0, globals_1.expect)(r).toBe(false);
        a = "";
        r = !!a;
        console.log(`!!${a} => ${r} (empty string)`);
        (0, globals_1.expect)(r).toBe(false);
    });
});
(0, globals_1.describe)("Col-ease", () => {
    (0, globals_1.test)("Default", () => {
        const waka = null;
        const r = waka !== null && waka !== void 0 ? waka : "default";
        (0, globals_1.expect)(r).toBe("default");
        (0, globals_1.expect)(r).not.toBeNull();
    });
    (0, globals_1.test)("Throw if missing", () => {
        const t = () => {
            const waka = null;
            if (waka == null)
                throw new Error("Missing");
        };
        (0, globals_1.expect)(t).toThrowError("Missing");
    });
});
//# sourceMappingURL=index.test.js.map