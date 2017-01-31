## Linear Search

Start with this snippet of code to generate an array of the numbers 1-999 in
a random order:

```ruby
values = (1..1000).to_a.shuffle
```

Don't forget to pseudocode to get yourself started.

Once you have that code written and working (make sure you try out several target search values including the upper and lower limit of your values),
answer the questions below.

Imagine that comparing two numbers is the only instruction that is "expensive" in this algorithm.

1. How many comparisons would run in the best-case scenario for that algorithm?
2. How many comparisons would run in the worse-case scenario for that algorithm?
3. How many comparisons would run in an average case?
4. How would the worst-case scenario grow in proportion to the number of elements in the set?
