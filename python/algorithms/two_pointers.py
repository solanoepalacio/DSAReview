"""Two-pointer helpers — Week 1, Day 2.

Three classic shapes:

  reverse_in_place   -> opposite-ends pointers swapping toward the center
  dedup_sorted       -> slow/fast (read & write) compaction in place
  max_water          -> opposite-ends pointers, always advance the shorter wall

All are O(n) time, O(1) extra space.

The co-located `two_pointers_test.py` is the spec — implement until it's green:

    make t-py NAME=two_pointers      # or: cd python && pytest
"""

from collections.abc import MutableSequence, Sequence


def reverse_in_place(a: MutableSequence[int]) -> None:
    """Reverse `a` in place using two converging pointers. Mutates `a`, returns None.

    Invariant: everything outside [left, right] is already in its final position.
    """
    left = 0
    right = len(a) - 1

    while left <= right:
        if left == right:
            print("uneven")
            # Middle item of a list with un-even count of items
            # No need to re-order this item.
            # We are done.
            return
        print("reversing")
        tmp = a[left]
        a[left] = a[right]
        a[right] = tmp

        left += 1
        right -= 1


def dedup_sorted(a: MutableSequence[int]) -> int:
    """Compact the *sorted* sequence `a` so each distinct value appears once at the
    front, in order. Return the new logical length `k`; afterwards `a[:k]` holds the
    result and elements at indices >= k are don't-care. O(1) extra space.

    Invariant: a[0:slow] is the deduped prefix; `fast` scans the rest.
    """
    if len(a) == 0:
        return 0

    slow_ptr = 1
    fast_ptr = 1
    slow = a[0]
    k = 1
    while fast_ptr < len(a):
        fast = a[fast_ptr]
        if fast > slow:
            slow = fast
            a[slow_ptr] = fast
            slow_ptr += 1
            k += 1
        fast_ptr += 1
    return k


def max_water(heights: Sequence[int]) -> int:
    """Given vertical walls of the given `heights` (one per unit of x-distance),
    return the most water two walls can hold between them:

        area(l, r) = min(heights[l], heights[r]) * (r - l)

    Start a pointer at each end and always advance the one at the *shorter* wall.
    Return 0 if fewer than two walls. O(n) time, O(1) space.

    Invariant: `best` is the max area over every pair the pointers have already
    spanned; moving the taller wall could never beat the pair we just left.
    """
    if len(heights) < 2:
        return 0

    highest = heights[len(heights) - 1]

    pointer = 0
    max_area = 0
    while pointer < len(heights):
        distance = len(heights) - 1 - pointer
        max_area = max(max_area, area(highest, heights[pointer], distance))
        pointer += 1
    return max_area


def area(left, right, d):
    return min(left, right) * d
