import { describe, it, expect } from "vitest";
import { DynamicArray } from "./dynamic-array.js";

/**
 * Spec for the Day 1 dynamic array. These tests ARE the requirements —
 * implement `dynamic-array.ts` until they're all green.
 *
 *   make t-ts NAME=dynamic-array      # or: cd typescript && npm test
 */
describe("DynamicArray", () => {
  describe("construction & capacity", () => {
    it("honors the requested initial capacity", () => {
      expect(new DynamicArray<number>(8).capacity).toBe(8);
    });

    it("clamps a zero/negative initial capacity up to at least 1", () => {
      expect(new DynamicArray<number>(0).capacity).toBeGreaterThanOrEqual(1);
      expect(new DynamicArray<number>(-5).capacity).toBeGreaterThanOrEqual(1);
    });

    it("starts empty", () => {
      const a = new DynamicArray<number>(4);
      expect(a.size).toBe(0);
    });
  });

  describe("push / get", () => {
    it("stores elements and reads them back in insertion order", () => {
      const a = new DynamicArray<number>(2);
      for (let i = 0; i < 5; i++) a.push(i * 10);
      expect(a.size).toBe(5);
      expect([0, 1, 2, 3, 4].map((i) => a.get(i))).toEqual([0, 10, 20, 30, 40]);
    });

    it("works with any element type (generic)", () => {
      const a = new DynamicArray<string>(1);
      a.push("a");
      a.push("b");
      expect(a.get(0)).toBe("a");
      expect(a.get(1)).toBe("b");
    });
  });

  describe("growth strategy — doubling", () => {
    it("doubles capacity when the buffer fills", () => {
      const a = new DynamicArray<number>(2);
      expect(a.capacity).toBe(2);
      a.push(1);
      a.push(2);
      expect(a.capacity).toBe(2); // still full but not yet over
      a.push(3); // overflow -> resize
      expect(a.capacity).toBe(4);
      a.push(4);
      a.push(5); // overflow -> resize again
      expect(a.capacity).toBe(8);
    });

    it("never has capacity smaller than size, across many pushes", () => {
      const a = new DynamicArray<number>(1);
      for (let i = 0; i < 1000; i++) {
        a.push(i);
        expect(a.capacity).toBeGreaterThanOrEqual(a.size);
      }
      expect(a.size).toBe(1000);
      // contiguous values survived every resize/copy
      expect(a.get(0)).toBe(0);
      expect(a.get(999)).toBe(999);
    });
  });

  describe("pop", () => {
    it("removes and returns the last element (LIFO)", () => {
      const a = new DynamicArray<string>(4);
      a.push("x");
      a.push("y");
      expect(a.pop()).toBe("y");
      expect(a.pop()).toBe("x");
      expect(a.size).toBe(0);
    });

    it("returns undefined when empty and leaves size at 0", () => {
      const a = new DynamicArray<number>(4);
      expect(a.pop()).toBeUndefined();
      expect(a.size).toBe(0);
    });

    it("supports interleaved push/pop", () => {
      const a = new DynamicArray<number>(2);
      a.push(1);
      a.push(2);
      expect(a.pop()).toBe(2);
      a.push(3);
      expect(a.get(0)).toBe(1);
      expect(a.get(1)).toBe(3);
      expect(a.size).toBe(2);
    });
  });

  describe("set & bounds checking", () => {
    it("overwrites an existing index", () => {
      const a = new DynamicArray<number>(4);
      a.push(1);
      a.set(0, 99);
      expect(a.get(0)).toBe(99);
    });

    it("throws RangeError reading out of bounds", () => {
      const a = new DynamicArray<number>(4);
      a.push(1);
      expect(() => a.get(1)).toThrow(RangeError); // == size, not < size
      expect(() => a.get(-1)).toThrow(RangeError);
    });

    it("throws RangeError writing out of bounds (cannot set past the end)", () => {
      const a = new DynamicArray<number>(4);
      a.push(1);
      expect(() => a.set(5, 0)).toThrow(RangeError);
      expect(() => a.set(-1, 0)).toThrow(RangeError);
    });
  });
});
