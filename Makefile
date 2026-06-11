.PHONY: test test-ts test-py test-rs t-ts t-py t-rs install

test: test-ts test-py test-rs

test-ts:
	cd typescript && npm test

test-py:
	cd python && pytest

test-rs:
	cd rust && cargo test

# Run a single topic's tests. Pass NAME=<substring of the file/test name>:
#   make t-ts NAME=dynamic-array
#   make t-py NAME=binary_search
#   make t-rs NAME=stack
t-ts:
	cd typescript && npx vitest run $(NAME)

t-py:
	cd python && pytest -k "$(NAME)"

t-rs:
	cd rust && cargo test $(NAME)

install:
	cd typescript && npm install
	cd python && python -m venv .venv && . .venv/bin/activate && pip install -e ".[dev]"
	cd rust && cargo build
