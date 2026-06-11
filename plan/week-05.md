# Week 5 — Recursion, Backtracking & Dynamic Programming

The "hard" week and the biggest differentiator. DP intimidates people; the trick is a
repeatable process: define the state, the recurrence, the base case, then memoize → tabulate.

---

## Day 21 (Mon) — Recursion & divide and conquer

- **Theory:** recursion (base case + recursive case + progress), the call stack, recursion
  tree → complexity. Divide & conquer: merge sort & quicksort, the partition step, why
  quickselect is O(n) average.
- **Implement:** merge sort and quicksort (+ quickselect).
  → `algorithms/sorting`
- **LeetCode:** Sort an Array (M), Kth Largest Element in an Array (M, via quickselect),
  Merge k Sorted Lists (H).

## Day 22 (Tue) — Backtracking I (subsets & permutations)

- **Theory:** the backtracking template (choose → explore → un-choose). Decision tree,
  pruning. Subsets vs. combinations vs. permutations.
- **Implement:** generic backtracking generator for subsets & permutations.
  → `algorithms/backtracking`
- **LeetCode:** Subsets (M), Permutations (M), Combination Sum (M).

## Day 23 (Wed) — Backtracking II (constraints & pruning)

- **Theory:** constraint propagation, pruning invalid branches early. Grid backtracking.
- **Implement:** N-Queens solver.
  → `algorithms/n-queens`
- **LeetCode:** Word Search (M), Palindrome Partitioning (M), N-Queens (H).

## Day 24 (Thu) — DP I (1-D)

- **Theory:** overlapping subproblems + optimal substructure. Top-down (memoization) vs.
  bottom-up (tabulation). The state-definition process. 1-D DP.
- **Implement:** memoization + tabulation templates on Fibonacci/climbing stairs; coin change.
  → `algorithms/dp-1d`
- **LeetCode:** Climbing Stairs (E), House Robber (M), Coin Change (M).

## Day 25 (Fri) — DP II (2-D / sequences) + review

- **Theory:** 2-D DP over two sequences or grid. Reconstructing the answer from the table.
- **Implement:** longest common subsequence and edit distance.
  → `algorithms/dp-2d`
- **LeetCode:** Longest Common Subsequence (M), Unique Paths (M), Longest Increasing Subsequence (M).
- **Review:** re-derive coin change *and* LCS recurrences from a blank page.

---

**End-of-week check:** can you go from a word problem → state definition → recurrence →
base case → code, out loud, in under 5 minutes? That's the interview skill.
