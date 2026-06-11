# Rust implementations

```bash
cargo test                # all tests
cargo test stack          # one topic (substring of the test path)
```

From the repo root: `make t-rs NAME=stack`.

Single library crate. Add a topic file under `src/data_structures/` or
`src/algorithms/`, declare it in the matching `mod.rs`, and put tests inline:

```rust
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() { /* ... */ }
}
```

`src/data_structures/stack.rs` is a worked example of the conventions.
