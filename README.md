## Linear Search

Start with this snippet of code to generate an array of the numbers 1-999 in
a random order:

```ruby
values = (1..1000).to_a.shuffle
```

Write code to find a value `x` (such as `25`) in the array following this algorithm:

0. Set a `found` flag to false
1. Set a `marker` to zero
2. Find the value in `values` at position `marker`
3. See if that value is equal to the one we're searching for
4. If it is, set `found` to true
5. If it's not, do nothing
6. If `marker` is at the end of the set, exit the search and say the value was not found
7. If the value has not been found, increment the `marker` and go back to step 2
8. If the value has been found, print that message

Once you have that code written and working (make sure you try out several target search values including the upper and lower limit of your values),
answer the questions below.

Imagine that comparing two numbers is the only instruction that is "expensive" in this algorithm.

1. How many comparisons would run in the best-case scenario for that algorithm?
2. How many comparisons would run in the worse-case scenario for that algorithm?
3. How many comparisons would run in an average case?
4. How would the worst-case scenario grow in proportion to the number of elements in the set?
