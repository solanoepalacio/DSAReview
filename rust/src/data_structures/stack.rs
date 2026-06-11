//! Stack (LIFO) — Week 2, Day 8.
//!
//! A `Vec`-backed stack. Trivial to wrap, but writing it out makes the LIFO
//! invariant and the push/pop/peek surface explicit. All operations are
//! amortized O(1).

#[derive(Debug, Default)]
pub struct Stack<T> {
    items: Vec<T>,
}

impl<T> Stack<T> {
    pub fn new() -> Self {
        Stack { items: Vec::new() }
    }

    pub fn push(&mut self, value: T) {
        self.items.push(value);
    }

    /// Remove and return the top element, or `None` if empty.
    pub fn pop(&mut self) -> Option<T> {
        self.items.pop()
    }

    /// Look at the top element without removing it.
    pub fn peek(&self) -> Option<&T> {
        self.items.last()
    }

    pub fn len(&self) -> usize {
        self.items.len()
    }

    pub fn is_empty(&self) -> bool {
        self.items.is_empty()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn push_pop_is_lifo() {
        let mut s = Stack::new();
        s.push(1);
        s.push(2);
        s.push(3);
        assert_eq!(s.len(), 3);
        assert_eq!(s.pop(), Some(3));
        assert_eq!(s.pop(), Some(2));
        assert_eq!(s.pop(), Some(1));
        assert_eq!(s.pop(), None);
    }

    #[test]
    fn peek_does_not_remove() {
        let mut s = Stack::new();
        s.push("a");
        s.push("b");
        assert_eq!(s.peek(), Some(&"b"));
        assert_eq!(s.len(), 2);
    }

    #[test]
    fn empty_behaviour() {
        let mut s: Stack<i32> = Stack::new();
        assert!(s.is_empty());
        assert_eq!(s.peek(), None);
        assert_eq!(s.pop(), None);
    }
}
