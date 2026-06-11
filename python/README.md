# Python implementations

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
pytest                        # all tests
pytest -k binary_search       # one topic (matches file/test name substring)
```

From the repo root: `make t-py NAME=binary_search`.

Put code under `data_structures/` or `algorithms/`, with a co-located `*_test.py`
(pytest is configured to discover that pattern). Import via the package path:

```python
from algorithms.binary_search import lower_bound
```

`algorithms/binary_search.py` is a worked example of the conventions.
