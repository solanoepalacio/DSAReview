import { describe, it, expect } from "vitest";
import { DynamicArray } from "./dynamic-array.js";

describe("DynamicArray", () => {
  it("pushes and reads back in order", () => {
    const a = new DynamicArray<number>(2);
    for (let i = 0; i < 5; i++) a.push(i * 10);
    expect(a.size).toBe(5);
    expect([0, 1, 2, 3, 4].map((i) => a.get(i))).toEqual([0, 10, 20, 30, 40]);
  });

  it("grows capacity by doubling", () => {
    const a = new DynamicArray<number>(2);
    expect(a.capacity).toBe(2);
    a.push(1);
    a.push(2);
    a.push(3); // triggers resize
    expect(a.capacity).toBe(4);
  });

  it("pops in LIFO order and returns undefined when empty", () => {
    const a = new DynamicArray<string>();
    a.push("x");
    a.push("y");
    expect(a.pop()).toBe("y");
    expect(a.pop()).toBe("x");
    expect(a.pop()).toBeUndefined();
    expect(a.size).toBe(0);
  });

  it("set overwrites and throws out of bounds", () => {
    const a = new DynamicArray<number>();
    a.push(1);
    a.set(0, 99);
    expect(a.get(0)).toBe(99);
    expect(() => a.get(5)).toThrow(RangeError);
    expect(() => a.set(5, 0)).toThrow(RangeError);
  });
});
