# Week 1 — Arrays, Strings & Core Patterns

The bread-and-butter. Most interviews open with one of these. Master complexity analysis
and the two-pointer / sliding-window / hashing trio and you've covered a huge slice of
Easy/Medium problems.

> **Top 150** numbers below refer to LeetCode's "Top Interview 150" study plan.
> Check off `[x]` as you go.

---

## Day 1 (Mon) — Complexity & dynamic arrays

- **Theory:** Big-O / Big-Θ / Big-Ω, amortized analysis. How a dynamic array (vector) grows
  (doubling → amortized O(1) append). Cache locality vs. linked structures.
- **Implement:**
  - [x] resizable dynamic array (push, pop, get, set, grow-by-doubling) → `typescript/src/data-structures/dynamic-array.ts`
- **LeetCode:**
  - [x] Two Sum (E)
  - [x] Contains Duplicate (E)
  - [ ] Best Time to Buy and Sell Stock (E)
- **Top 150:**
  - [x] 88 Merge Sorted Array (E)
  - [x] 27 Remove Element (E)
  - [x] 26 Remove Duplicates from Sorted Array (E)
  - [ ] 80 Remove Duplicates from Sorted Array II (M)
  - [ ] 169 Majority Element (E)
  - [ ] 189 Rotate Array (M)
  - [ ] 380 Insert Delete GetRandom O(1) (M) ← best dynamic-array tie-in

## Day 2 (Tue) — Two pointers

- **Theory:** opposite-ends vs. same-direction pointers. Why sorting often unlocks it.
  Invariant: what each pointer guarantees about the space it has passed.
- **Implement:**
  - [x] two-pointer helpers — reverse in place, remove duplicates from sorted array → `algorithms/two-pointers`
- **LeetCode:**
  - [x] Valid Palindrome (E)
  - [x] Two Sum II – Sorted (M)
  - [x] 3Sum (M)
  - [x] Container With Most Water (M)
- **Top 150:**
  - [x] 125 Valid Palindrome (E)
  - [x] 392 Is Subsequence (E)
  - [x] 167 Two Sum II (M)
  - [x] 11 Container With Most Water (M)
  - [x] 15 3Sum (M)

## Day 3 (Wed) — Sliding window

- **Theory:** fixed vs. variable window. Expand-right / shrink-left template. Recognizing
  "longest/shortest subarray/substring with property X".
- **Implement:**
  - [ ] generic variable-size sliding-window template + one concrete use → `algorithms/sliding-window`
- **LeetCode:**
  - [ ] Longest Substring Without Repeating Characters (M)
  - [ ] Maximum Average Subarray I (E)
  - [ ] Minimum Size Subarray Sum (M)
- **Top 150:**
  - [ ] 209 Minimum Size Subarray Sum (M)
  - [ ] 3 Longest Substring Without Repeating Characters (M)
  - [ ] 76 Minimum Window Substring (H)
  - [ ] 30 Substring with Concatenation of All Words (H)

## Day 4 (Thu) — Hashing & hash maps

- **Theory:** hash functions, collisions, chaining vs. open addressing, load factor & resize.
  Why average O(1), worst O(n).
- **Implement:**
  - [ ] a hash map from scratch (chaining or linear probing; put/get/delete/resize) → `data-structures/hash-map`
- **LeetCode:**
  - [ ] Valid Anagram (E)
  - [ ] Group Anagrams (M)
  - [ ] Top K Frequent Elements (M)
- **Top 150:**
  - [ ] 383 Ransom Note (E)
  - [ ] 205 Isomorphic Strings (E)
  - [ ] 290 Word Pattern (E)
  - [ ] 242 Valid Anagram (E)
  - [ ] 49 Group Anagrams (M)
  - [ ] 1 Two Sum (E)
  - [ ] 202 Happy Number (E)
  - [ ] 219 Contains Duplicate II (E)
  - [ ] 128 Longest Consecutive Sequence (M)

## Day 5 (Fri) — Prefix sums & string basics + review

- **Theory:** prefix sums / running totals, prefix-sum + hashmap for subarray problems.
- **Implement:**
  - [ ] prefix-sum array (range-sum query); optional 2D prefix sum → `algorithms/prefix-sum`
- **LeetCode:**
  - [ ] Product of Array Except Self (M)
  - [ ] Subarray Sum Equals K (M)
  - [ ] Encode and Decode Strings (M)
- **Top 150:**
  - [ ] 238 Product of Array Except Self (M)
  - [ ] 53 Maximum Subarray (M, Kadane — prefix-sum cousin)
  - [ ] 14 Longest Common Prefix (E)
  - [ ] 58 Length of Last Word (E)
  - [ ] 151 Reverse Words in a String (M)
- **Review:** re-attempt any problem from this week that took >35 min, from a blank editor.

---

**End-of-week check:** Can you, without notes, (1) state amortized cost of vector append,
(2) write the sliding-window template, (3) explain hashmap resize? If not, revisit before Week 2.
