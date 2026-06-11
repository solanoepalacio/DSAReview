from algorithms.binary_search import binary_search, lower_bound, upper_bound


def test_binary_search_finds_existing():
    a = [1, 3, 5, 7, 9, 11]
    for i, v in enumerate(a):
        assert binary_search(a, v) == i


def test_binary_search_missing_returns_minus_one():
    a = [1, 3, 5, 7, 9]
    assert binary_search(a, 4) == -1
    assert binary_search(a, 0) == -1
    assert binary_search(a, 100) == -1
    assert binary_search([], 1) == -1


def test_lower_and_upper_bound_with_duplicates():
    a = [1, 2, 2, 2, 3, 5]
    assert lower_bound(a, 2) == 1   # first 2
    assert upper_bound(a, 2) == 4   # one past the last 2
    assert upper_bound(a, 2) - lower_bound(a, 2) == 3  # count of 2s


def test_bounds_at_edges():
    a = [10, 20, 30]
    assert lower_bound(a, 5) == 0
    assert lower_bound(a, 35) == 3
    assert upper_bound(a, 30) == 3
