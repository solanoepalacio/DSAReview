# Week 3 — Trees, Heaps & Tries

Recursion becomes central. Trees show up constantly; heaps power top-k and scheduling;
tries power prefix/autocomplete problems. Get fluent in the three DFS orders and BFS.

> **Top 150** numbers below refer to LeetCode's "Top Interview 150" study plan.
> Check off `[x]` as you go.

---

## Day 11 (Mon) — Binary trees & DFS traversals

- **Theory:** binary tree shape, height vs. depth. Pre/in/post-order — recursive *and*
  iterative (explicit stack). When each order matters.
- **Implement:**
  - [ ] binary tree + all three DFS traversals (recursive and iterative) → `data-structures/binary-tree`
- **LeetCode:**
  - [ ] Invert Binary Tree (E)
  - [ ] Maximum Depth of Binary Tree (E)
  - [ ] Same Tree (E)
- **Top 150:**
  - [ ] 104 Maximum Depth (E)
  - [ ] 100 Same Tree (E)
  - [ ] 226 Invert Binary Tree (E)
  - [ ] 101 Symmetric Tree (E)
  - [ ] 112 Path Sum (E)
  - [ ] 129 Sum Root to Leaf Numbers (M)
  - [ ] 114 Flatten Binary Tree to Linked List (M)
  - [ ] 105 Build Tree from Preorder+Inorder (M)
  - [ ] 106 Build Tree from Inorder+Postorder (M)
  - [ ] 236 Lowest Common Ancestor (M)

## Day 12 (Tue) — BFS / level-order

- **Theory:** breadth-first traversal with a queue, level-by-level processing.
- **Implement:**
  - [ ] BFS level-order traversal (returns list of levels) → `algorithms/tree-bfs`
- **LeetCode:**
  - [ ] Binary Tree Level Order Traversal (M)
  - [ ] Binary Tree Right Side View (M)
  - [ ] Binary Tree Zigzag Level Order Traversal (M)
- **Top 150:**
  - [ ] 199 Binary Tree Right Side View (M)
  - [ ] 637 Average of Levels (E)
  - [ ] 102 Level Order Traversal (M)
  - [ ] 103 Zigzag Level Order Traversal (M)

## Day 13 (Wed) — Binary search trees

- **Theory:** BST invariant, search/insert/delete (incl. the two-children delete case),
  why average O(log n) but O(n) when unbalanced. In-order = sorted.
- **Implement:**
  - [ ] BST (insert, search, delete, in-order iterator) → `data-structures/bst`
- **LeetCode:**
  - [ ] Validate Binary Search Tree (M)
  - [ ] Kth Smallest Element in a BST (M)
  - [ ] Lowest Common Ancestor of a BST (M)
- **Top 150:**
  - [ ] 530 Minimum Absolute Difference in BST (E)
  - [ ] 230 Kth Smallest in a BST (M)
  - [ ] 98 Validate Binary Search Tree (M)
  - [ ] 173 Binary Search Tree Iterator (M)
  - [ ] 108 Convert Sorted Array to BST (E)

## Day 14 (Thu) — Heaps / priority queues

- **Theory:** binary heap as an array, sift-up/sift-down, build-heap O(n). Min vs. max heap.
  Heap = the answer to most "top-k / k-th largest / streaming median" problems.
- **Implement:**
  - [ ] binary heap (push, pop, peek, heapify) → `data-structures/heap`
- **LeetCode:**
  - [ ] Kth Largest Element in an Array (M)
  - [ ] Last Stone Weight (E)
  - [ ] K Closest Points to Origin (M)
- **Top 150:**
  - [ ] 215 Kth Largest Element in an Array (M)
  - [ ] 502 IPO (H)
  - [ ] 373 Find K Pairs with Smallest Sums (M)
  - [ ] 295 Find Median from Data Stream (H)

## Day 15 (Fri) — Tries + review

- **Theory:** trie (prefix tree) structure, insert/search/startsWith, space/time trade-offs
  vs. hashing. Used in autocomplete, word-search, IP routing.
- **Implement:**
  - [ ] trie (insert, search, startsWith) → `data-structures/trie`
- **LeetCode:**
  - [ ] Implement Trie (Prefix Tree) (M)
  - [ ] Design Add and Search Words Data Structure (M)
  - [ ] Word Search II (H)
- **Top 150:**
  - [ ] 208 Implement Trie (M)
  - [ ] 211 Design Add and Search Words (M)
  - [ ] 212 Word Search II (H)
- **Review:** redo BST delete and heap sift-down blank.

---

**End-of-week check:** iterative in-order traversal from memory; explain build-heap O(n);
sketch a trie node and its insert.
