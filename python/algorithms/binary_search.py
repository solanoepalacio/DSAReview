"""Binary search family — Week 6, Day 26.

Three building blocks every interview wants you to get exactly right:

  binary_search   -> index of target, or -1
  lower_bound     -> first index with a[i] >= target  (insertion point, left)
  upper_bound     -> first index with a[i] >  target  (insertion point, right)

The invariant is the whole game: keep [lo, hi) as the half-open range that could
still contain the answer, and never let an off-by-one slip in.

All run in O(log n) on a sorted sequence.
"""

from collections.abc import Sequence


def binary_search(a: Sequence[int], target: int) -> int:
    """Return an index of `target` in sorted `a`, or -1 if absent."""
    lo, hi = 0, len(a) - 1  # closed range [lo, hi]
    while lo <= hi:
        mid = lo + (hi - lo) // 2  # avoids overflow in fixed-width languages
        if a[mid] == target:
            return mid
        if a[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


def lower_bound(a: Sequence[int], target: int) -> int:
    """First index i where a[i] >= target (== len(a) if none). Half-open [lo, hi)."""
    lo, hi = 0, len(a)
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if a[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo


def upper_bound(a: Sequence[int], target: int) -> int:
    """First index i where a[i] > target (== len(a) if none)."""
    lo, hi = 0, len(a)
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if a[mid] <= target:
            lo = mid + 1
        else:
            hi = mid
    return lo
