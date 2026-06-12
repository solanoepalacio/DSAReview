# Day 02 — Two Pointers

**Implemented:** `python/algorithms/two_pointers.py` — `reverse_in_place`,
`dedup_sorted`, and `max_water` (the last one needs a fix, see "What to revisit").

---

## Highlights

### The two pointer shapes, and why they turn O(n²) into O(n)

Both shapes attack a problem that *looks* like it needs a nested loop over pairs
(O(n²)) and replace it with two indices that each move only forward and never reset.
The reason the total work is **linear** is the key insight: across the whole run, the
two pointers take at most `n` steps *combined* (each advance shrinks the gap between
them, or extends the read head once). No element is revisited. There's no inner loop
restarting from scratch — that's the n² you avoided.

What *licenses* skipping all those pairs is an **invariant**: when you move a pointer,
you must be able to prove every pair you just stepped over can't be the answer.

**1. Opposite ends (converging).** `left` at 0, `right` at n-1, walk toward each other.
Used when the answer is a *pair of positions* and an ordering tells you which end is the
bottleneck.
- *Pair-sum in a sorted array:* if `a[left] + a[right]` is too big, every pair using the
  current `right` with a value ≥ `a[left]` is also too big (sorted) → drop the whole
  `right` column with one `right--`. Too small → `left++`. Each move discards an entire
  row/column of the implicit n×n pair matrix → O(n) instead of O(n²).
- *Reverse in place:* swap `a[left]`/`a[right]`, step inward. Invariant: everything
  outside `[left, right]` is already final. Odd length → the single middle element
  (`left == right`) needs no swap.
- *Most water between two walls:* always move the **shorter** wall (see Q5).

**2. Same direction (slow / fast — read & write).** Both start at the front, only move
forward. `fast` reads every element; `slow` marks the boundary of the region you're
building. Used for in-place filtering/compaction with O(1) extra space.
- *Dedup a sorted array:* `fast` scans; whenever `a[fast]` is a new value, write it at
  `slow` and advance `slow`. Invariant: `a[0:slow]` is the finished deduped prefix.
  **Sorted matters** — it's what makes duplicates adjacent, so a single neighbor
  comparison is enough to know if a value is new.

### Why these need an *ordered* set — and what to do with an unordered one

The discard-a-region move relies on **monotonicity** (sorting is the usual way to get
it). Given an unordered input, two standard plays:
- **Sort, then two-pointer:** O(n log n) time, but **O(1)** extra space; dedup falls out
  for free and output comes sorted.
- **Hash set/map, no sort:** O(n) time, O(n) space; required when you must return
  *original indices* (sorting scrambles them) or just need existence/complement lookup.

Trap: sorting is only legal when **position doesn't matter** (it's a question about a set
of values). For **subarray/substring** problems, contiguity *is* the problem — you can't
sort; the monotonicity has to come from the data (e.g. all-positive ⇒ running sum
monotonic) or you reach for a hash / sliding window.

### Lesson: passing tests ≠ correct algorithm

`max_water` passed all six original tests while being wrong — it only measured every
wall against the *last* wall, so it missed pairs in the interior. It got lucky because
the optimal pair touched the last wall in all six cases. The spec was too weak to
*discriminate* the right algorithm from a plausible wrong one. Fix: add a case where the
best pair touches neither end (`[2,8,8,2] → 8`). Takeaway — when writing tests for an
optimization, include an input where the naive/partial approach gives a *different*
answer than the correct one.

---

## What to revisit

- **`max_water` is not yet correct.** Re-implement as converging two pointers: `left=0`,
  `right=n-1`; loop while `left < right`, take `min(h[left], h[right]) * (right-left)`,
  then advance the **shorter** wall. The regression test
  `test_max_water_best_pair_is_interior` pins it.
- Minor: `reverse_in_place` had leftover `print` debug lines; `dedup_sorted` carries a
  redundant `slow_ptr`/`k` pair (one index suffices).

---

## Comprehension questions

The questions posed before implementing, to re-test myself cold later:

1. **The two flavors:** describe *opposite-ends* (converging) vs. *same-direction*
   (slow/fast) two pointers. For each, what does the region the pointers have already
   passed guarantee — the invariant?
2. **Pair-sum in a sorted array:** if `a[left] + a[right]` is bigger than the target, why
   is it provably safe to do `right--` and never reconsider any pair that used the old
   `right`? Which pairs exactly did you discard in that one move?
3. **Why O(n), not O(n²)?** Two pointers feels like a nested loop. What guarantees the
   total work is linear?
4. **Compacting a sorted array in place:** using `slow` (write) and `fast` (read), what
   does each pointer mean? Why must the array be **sorted**, and what breaks if it isn't?
5. **Most water between two walls:** area = `min(left_h, right_h) * distance`. You always
   move the pointer at the **shorter** wall. Why can moving the taller wall never produce
   a larger area?
6. **Triplets summing to zero:** the standard approach sorts, fixes one element with an
   outer loop, then runs opposite-ends pair-sum on the rest. Where do the two factors of
   the O(n²) cost come from, and why do you need extra duplicate-skipping logic that the
   plain two-pointer pair-sum didn't?

### Bonus question explored today

7. **Ordered vs. unordered inputs:** these techniques rely on monotonicity. Given the same
   problem on an *unordered* set, when do you sort-then-two-pointer vs. reach for a hash?
   When is sorting *not even allowed*?
