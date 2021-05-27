from linear_search import linear_search, global_linear_search

print(linear_search(3, [1,2,3]) == 2)
print(linear_search(4, [1,2,3]) == None)
print(linear_search(13, [1,2,3]) == None)
print(linear_search("test", ["hi", "no", "test"]) == 2)
print(linear_search("test", [1,2,3]) == None)
print(linear_search("1", [1,2,3]) == None)

print(global_linear_search(1, [1,1,1]) == [0,1,2])
print(global_linear_search("test", ["hi", "no", "test", "test"]) == [2, 3])

## Error out, no type checking.
#print(global_linear_search("test", [1,2,3,4] == None))