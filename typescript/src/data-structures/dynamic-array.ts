export class DynamicArray<T> {
  private buffer: (T | undefined)[];
  private _capacity: number;
  private length = 0;
  constructor(initialCapacity = 4) {
    this.buffer = [];
    this._capacity = initialCapacity < 1 ? 1 : initialCapacity;
  }

  get size(): number {
    return this.length;
  }

  get capacity(): number {
    return this._capacity;
  }

  push(value: T): void {
    if (this.length >= this.capacity) {
      const tmp = this.buffer;
      this._capacity = this._capacity * 2;
      this.buffer = new Array(this._capacity);

      for (const i in tmp) {
        this.buffer[i] = tmp[i];
      }
    }
    this.buffer[this.length] = value;
    this.length += 1;
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined;

    const val = this.buffer[this.length - 1];
    this.buffer[this.length - 1] = undefined;
    this.length -= 1;
    return val;
  }

  get(index: number): T {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of range");
    }
    return this.buffer[index];
  }

  set(index: number, value: T): void {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds.");
    }
    this.buffer[index] = value;
  }
}
