# Week 2 — Linked Lists, Stacks & Queues

Pointer manipulation and LIFO/FIFO structures. Linked-list problems test careful pointer
bookkeeping; stacks/queues underpin traversal, parsing, and monotonic-stack tricks.

---

## Day 6 (Mon) — Singly linked lists

- **Theory:** node/pointer model, head/tail, why O(1) insert but O(n) index. Dummy-head
  technique. Reversal by pointer rewiring.
- **Implement:** singly linked list (push_front/back, delete, reverse, find).
  → `rust/src/data_structures/singly_linked_list.rs` (great Rust ownership exercise) or TS/Py.
- **LeetCode:** Reverse Linked List (E), Merge Two Sorted Lists (E), Linked List Cycle (E).

## Day 7 (Tue) — Doubly linked lists & fast/slow pointers

- **Theory:** doubly linked list (prev pointers, O(1) delete given a node). Floyd's
  fast/slow pointer for cycle detection & finding the middle.
- **Implement:** doubly linked list (insert/delete both ends, used later for LRU).
  → `data-structures/doubly-linked-list`
- **LeetCode:** Middle of the Linked List (E), Remove Nth Node From End of List (M), Reorder List (M).

## Day 8 (Wed) — Stacks

- **Theory:** LIFO, array-backed vs. linked. Stack as implicit recursion. Matching/parsing.
- **Implement:** stack (push/pop/peek/empty), both array- and linked-list-backed.
  → `rust/src/data_structures/stack.rs` (already stubbed) or another language.
- **LeetCode:** Valid Parentheses (E), Min Stack (M), Evaluate Reverse Polish Notation (M).

## Day 9 (Thu) — Queues, deques & circular buffers

- **Theory:** FIFO, why a naive array dequeue is O(n), ring buffer for O(1). Deque as the
  swiss-army structure (both ends O(1)).
- **Implement:** circular-buffer queue + a deque.
  → `data-structures/queue` and `data-structures/deque`
- **LeetCode:** Implement Queue using Stacks (E), Implement Stack using Queues (E), Sliding Window Maximum (H, deque).

## Day 10 (Fri) — Monotonic stack + review

- **Theory:** monotonic (increasing/decreasing) stack: maintain order invariant to answer
  "next greater/smaller element" in O(n).
- **Implement:** monotonic-stack helper (next-greater-element).
  → `algorithms/monotonic-stack`
- **LeetCode:** Daily Temperatures (M), Next Greater Element I (E), Largest Rectangle in Histogram (H).
- **Review:** redo the hardest 1–2 problems of the week blank.

---

**End-of-week check:** reverse a linked list on a whiteboard; explain Floyd's cycle proof;
write next-greater-element with a monotonic stack from memory.
