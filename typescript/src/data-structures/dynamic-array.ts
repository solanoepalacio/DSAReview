/**
 * Dynamic array (resizable vector) — Week 1, Day 1.
 *
 * YOUR TASK: implement this from scratch so the tests in
 * `dynamic-array.test.ts` pass. Back it with a fixed-capacity buffer that
 * DOUBLES when full, giving amortized O(1) append.
 *
 * Rules of the game:
 *   - The buffer is `private`. Tests only ever touch the PUBLIC surface below
 *     (`size`, `capacity`, `push`, `pop`, `get`, `set`).
 *   - Maintain the invariant: 0 <= size <= capacity, and capacity >= 1.
 *   - Grow by doubling (NOT by a constant) — that's what makes append O(1)
 *     amortized. The tests assert the capacity progression.
 *
 * Target complexity:
 *   push       — amortized O(1)  (worst-case O(n) on the resize)
 *   pop        — O(1)
 *   get / set  — O(1)
 */
export class DynamicArray<T> {
  private buffer: (T | undefined)[];
  private length = 0;

  /** Start with a buffer of at least 1 slot (clamp tiny/zero inputs up to 1). */
  constructor(initialCapacity = 4) {
    // TODO: initialize the backing buffer.
    this.buffer = [];
    throw new Error("not implemented: constructor");
  }

  /** Number of elements actually stored. */
  get size(): number {
    throw new Error("not implemented: size");
  }

  /** Number of slots in the backing buffer before a resize is forced. */
  get capacity(): number {
    throw new Error("not implemented: capacity");
  }

  /** Append to the end. Amortized O(1); resizes (doubles) when full. */
  push(value: T): void {
    throw new Error("not implemented: push");
  }

  /** Remove and return the last element, or undefined if empty. O(1). */
  pop(): T | undefined {
    throw new Error("not implemented: pop");
  }

  /** Read index i. Throw RangeError if i is out of [0, size). O(1). */
  get(index: number): T {
    throw new Error("not implemented: get");
  }

  /** Overwrite index i. Throw RangeError if i is out of [0, size). O(1). */
  set(index: number, value: T): void {
    throw new Error("not implemented: set");
  }
}
