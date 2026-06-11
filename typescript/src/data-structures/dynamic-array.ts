/**
 * Dynamic array (resizable vector) — Week 1, Day 1.
 *
 * Backed by a fixed-capacity buffer that doubles when full, giving amortized O(1)
 * append. This is a from-scratch reference; in real code you'd just use `Array`.
 *
 * Complexity:
 *   push  — amortized O(1) (worst-case O(n) on the resize)
 *   pop   — O(1)
 *   get / set — O(1)
 */
export class DynamicArray<T> {
  private buffer: (T | undefined)[];
  private length = 0;

  constructor(initialCapacity = 4) {
    this.buffer = new Array(Math.max(1, initialCapacity));
  }

  get size(): number {
    return this.length;
  }

  get capacity(): number {
    return this.buffer.length;
  }

  push(value: T): void {
    if (this.length === this.buffer.length) {
      this.resize(this.buffer.length * 2);
    }
    this.buffer[this.length] = value;
    this.length++;
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined;
    this.length--;
    const value = this.buffer[this.length] as T;
    this.buffer[this.length] = undefined; // release reference
    return value;
  }

  get(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new RangeError(`index ${index} out of bounds (size ${this.length})`);
    }
    return this.buffer[index] as T;
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.length) {
      throw new RangeError(`index ${index} out of bounds (size ${this.length})`);
    }
    this.buffer[index] = value;
  }

  private resize(newCapacity: number): void {
    const next: (T | undefined)[] = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      next[i] = this.buffer[i];
    }
    this.buffer = next;
  }
}
