# Week 2 — Linked Lists, Stacks & Queues

Pointer manipulation and LIFO/FIFO structures. Linked-list problems test careful pointer
bookkeeping; stacks/queues underpin traversal, parsing, and monotonic-stack tricks.

> **Top 150** numbers below refer to LeetCode's "Top Interview 150" study plan.
> Check off `[x]` as you go.

---

## Day 6 (Mon) — Singly linked lists

- **Theory:** node/pointer model, head/tail, why O(1) insert but O(n) index. Dummy-head
  technique. Reversal by pointer rewiring.
- **Implement:**
  - [ ] singly linked list (push_front/back, delete, reverse, find) → `rust/src/data_structures/singly_linked_list.rs` (great Rust ownership exercise) or TS/Py
- **LeetCode:**
  - [ ] Reverse Linked List (E)
  - [ ] Merge Two Sorted Lists (E)
  - [ ] Linked List Cycle (E)
- **Top 150:**
  - [ ] 141 Linked List Cycle (E)
  - [ ] 21 Merge Two Sorted Lists (E)
  - [ ] 2 Add Two Numbers (M)
  - [ ] 92 Reverse Linked List II (M)

## Day 7 (Tue) — Doubly linked lists & fast/slow pointers

- **Theory:** doubly linked list (prev pointers, O(1) delete given a node). Floyd's
  fast/slow pointer for cycle detection & finding the middle.
- **Implement:**
  - [ ] doubly linked list (insert/delete both ends, used later for LRU) → `data-structures/doubly-linked-list`
- **LeetCode:**
  - [ ] Middle of the Linked List (E)
  - [ ] Remove Nth Node From End of List (M)
  - [ ] Reorder List (M)
- **Top 150:**
  - [ ] 19 Remove Nth Node From End (M)
  - [ ] 82 Remove Duplicates from Sorted List II (M)
  - [ ] 86 Partition List (M)
  - [ ] 61 Rotate List (M)
  - [ ] 146 LRU Cache (M, uses a doubly linked list)
  - [ ] 138 Copy List with Random Pointer (M)

## Day 8 (Wed) — Stacks

- **Theory:** LIFO, array-backed vs. linked. Stack as implicit recursion. Matching/parsing.
- **Implement:**
  - [ ] stack (push/pop/peek/empty), both array- and linked-list-backed → `rust/src/data_structures/stack.rs` (already stubbed) or another language
- **LeetCode:**
  - [ ] Valid Parentheses (E)
  - [ ] Min Stack (M)
  - [ ] Evaluate Reverse Polish Notation (M)
- **Top 150:**
  - [ ] 20 Valid Parentheses (E)
  - [ ] 155 Min Stack (M)
  - [ ] 150 Evaluate Reverse Polish Notation (M)
  - [ ] 71 Simplify Path (M)
  - [ ] 224 Basic Calculator (H)

## Day 9 (Thu) — Queues, deques & circular buffers

- **Theory:** FIFO, why a naive array dequeue is O(n), ring buffer for O(1). Deque as the
  swiss-army structure (both ends O(1)).
- **Implement:**
  - [ ] circular-buffer queue → `data-structures/queue`
  - [ ] deque → `data-structures/deque`
- **LeetCode:**
  - [ ] Implement Queue using Stacks (E)
  - [ ] Implement Stack using Queues (E)
  - [ ] Sliding Window Maximum (H, deque)
- **Top 150:** queues are thin in Top 150 — none map cleanly. Use the LeetCode problems above
  (or NeetCode) for this day; the monotonic-deque idea returns in Sliding Window Maximum.

## Day 10 (Fri) — Monotonic stack + review

- **Theory:** monotonic (increasing/decreasing) stack: maintain order invariant to answer
  "next greater/smaller element" in O(n).
- **Implement:**
  - [ ] monotonic-stack helper (next-greater-element) → `algorithms/monotonic-stack`
- **LeetCode:**
  - [ ] Daily Temperatures (M)
  - [ ] Next Greater Element I (E)
  - [ ] Largest Rectangle in Histogram (H)
- **Top 150:**
  - [ ] 42 Trapping Rain Water (H) — solvable with a monotonic stack (or two pointers)
- **Review:** redo the hardest 1–2 problems of the week blank. (739 Daily Temperatures and
  84 Largest Rectangle sit just outside Top 150 but are the canonical monotonic-stack drills.)

---

**End-of-week check:** reverse a linked list on a whiteboard; explain Floyd's cycle proof;
write next-greater-element with a monotonic stack from memory.
