from algorithms.two_pointers import dedup_sorted, max_water, reverse_in_place

# Spec for the Day 2 two-pointer helpers. These tests ARE the requirements —
# implement `two_pointers.py` until they're all green.
#
#   make t-py NAME=two_pointers      # or: cd python && pytest


# --- reverse_in_place -------------------------------------------------------


def test_reverse_even_length():
    a = [1, 2, 3, 4]
    reverse_in_place(a)
    assert a == [4, 3, 2, 1]


def test_reverse_odd_length_keeps_middle_fixed():
    a = [1, 2, 3, 4, 5]
    reverse_in_place(a)
    assert a == [5, 4, 3, 2, 1]


def test_reverse_empty_and_single_are_unchanged():
    empty: list[int] = []
    reverse_in_place(empty)
    assert empty == []

    single = [42]
    reverse_in_place(single)
    assert single == [42]


def test_reverse_mutates_in_place_and_returns_none():
    a = [1, 2, 3]
    result = reverse_in_place(a)
    assert result is None  # mutates, does not return a new list
    assert a == [3, 2, 1]  # same object was modified


# --- dedup_sorted -----------------------------------------------------------


def test_dedup_mixed_runs():
    a = [1, 1, 2, 3, 3, 3, 4]
    k = dedup_sorted(a)
    assert k == 4
    assert a[:k] == [1, 2, 3, 4]


def test_dedup_no_duplicates_is_unchanged():
    a = [1, 2, 3, 4, 5]
    k = dedup_sorted(a)
    assert k == 5
    assert a[:k] == [1, 2, 3, 4, 5]


def test_dedup_all_duplicates_collapses_to_one():
    a = [7, 7, 7, 7]
    k = dedup_sorted(a)
    assert k == 1
    assert a[:k] == [7]


def test_dedup_empty_returns_zero():
    a: list[int] = []
    assert dedup_sorted(a) == 0


def test_dedup_single_element():
    a = [9]
    k = dedup_sorted(a)
    assert k == 1
    assert a[:k] == [9]


def test_dedup_handles_negatives_and_returns_int():
    a = [-3, -3, -1, 0, 0, 5]
    k = dedup_sorted(a)
    assert isinstance(k, int)
    assert k == 4
    assert a[:k] == [-3, -1, 0, 5]


# --- max_water --------------------------------------------------------------


def test_max_water_classic_example():
    # the textbook case: best pair is index 1 (h=8) and index 8 (h=7) -> 7 * 7
    assert max_water([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49


def test_max_water_fewer_than_two_walls_is_zero():
    assert max_water([]) == 0
    assert max_water([5]) == 0


def test_max_water_two_walls():
    assert max_water([4, 7]) == 4  # min(4, 7) * 1


def test_max_water_best_pair_is_the_outer_walls():
    # tall ends, short middle: min(4, 4) * 4 beats any inner pair
    assert max_water([4, 1, 2, 1, 4]) == 16


def test_max_water_uniform_heights():
    # equal walls -> widest pair wins: 5 * (4 - 0)
    assert max_water([5, 5, 5, 5, 5]) == 20


def test_max_water_zero_height_walls_hold_nothing():
    assert max_water([0, 0, 0]) == 0
