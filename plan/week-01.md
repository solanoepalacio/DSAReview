# Week 1 — Arrays, Strings & Core Patterns

The bread-and-butter. Most interviews open with one of these. Master complexity analysis
and the two-pointer / sliding-window / hashing trio and you've covered a huge slice of
Easy/Medium problems.

---

## Day 1 (Mon) — Complexity & dynamic arrays

- **Theory:** Big-O / Big-Θ / Big-Ω, amortized analysis. How a dynamic array (vector) grows
  (doubling → amortized O(1) append). Cache locality vs. linked structures.
- **Implement:** a resizable dynamic array (push, pop, get, set, grow-by-doubling).
  → `typescript/src/data-structures/dynamic-array.ts`
- **LeetCode:** Two Sum (E), Contains Duplicate (E), Best Time to Buy and Sell Stock (E).

## Day 2 (Tue) — Two pointers

- **Theory:** opposite-ends vs. same-direction pointers. Why sorting often unlocks it.
  Invariant: what each pointer guarantees about the space it has passed.
- **Implement:** two-pointer helpers — reverse in place, remove duplicates from sorted array.
  → `algorithms/two-pointers` (your choice of language)
- **LeetCode:** Valid Palindrome (E), Two Sum II – Sorted (M), 3Sum (M), Container With Most Water (M).

## Day 3 (Wed) — Sliding window

- **Theory:** fixed vs. variable window. Expand-right / shrink-left template. Recognizing
  "longest/shortest subarray/substring with property X".
- **Implement:** a generic variable-size sliding-window template + one concrete use.
  → `algorithms/sliding-window`
- **LeetCode:** Longest Substring Without Repeating Characters (M), Maximum Average Subarray I (E),
  Minimum Size Subarray Sum (M).

## Day 4 (Thu) — Hashing & hash maps

- **Theory:** hash functions, collisions, chaining vs. open addressing, load factor & resize.
  Why average O(1), worst O(n).
- **Implement:** a hash map from scratch (chaining or linear probing; put/get/delete/resize).
  → `data-structures/hash-map`
- **LeetCode:** Valid Anagram (E), Group Anagrams (M), Top K Frequent Elements (M).

## Day 5 (Fri) — Prefix sums & string basics + review

- **Theory:** prefix sums / running totals, prefix-sum + hashmap for subarray problems.
- **Implement:** prefix-sum array (range-sum query); optional 2D prefix sum.
  → `algorithms/prefix-sum`
- **LeetCode:** Product of Array Except Self (M), Subarray Sum Equals K (M), Encode and Decode Strings (M).
- **Review:** re-attempt any problem from this week that took >35 min, from a blank editor.

---

**End-of-week check:** Can you, without notes, (1) state amortized cost of vector append,
(2) write the sliding-window template, (3) explain hashmap resize? If not, revisit before Week 2.
