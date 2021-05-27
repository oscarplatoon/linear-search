from linear_search import linear_search

print(linear_search(3, [1,2,3]) == 2)
print(linear_search(4, [1,2,3]) == None)
print(linear_search(13, [1,2,3]) == None)
print(linear_search("5", [1,2,3,5]) == None)
print(linear_search(1, [2,3,5,1,7,6]) == 3)
print(linear_search(3, [2,3,5,1,7,6,3]) == 1)
print(linear_search(99, [2,3,5,1,7,6,99]) == 6)
print(linear_search(99.1, [2,3,5,1,7,6,99]) == None)
