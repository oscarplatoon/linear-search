from linear_search import linear_search, global_linear_search

# linear search
print(linear_search(3, [1,2,3]) == 2)
print(linear_search(4, [1,2,3]) == None)
print(linear_search(13, [1,2,3]) == None)
print(linear_search("5", [1,2,3,5]) == None)
print(linear_search(1, [2,3,5,1,7,6]) == 3)
print(linear_search(3, [2,3,5,1,7,6,3]) == 1)
print(linear_search(99, [2,3,5,1,7,6,99]) == 6)
print(linear_search(99.1, [2,3,5,1,7,6,99]) == None)

# global linear search
print(global_linear_search(3, [1,2,3]) == [2])
print(global_linear_search("a", list('bananas')) == [1,3,5])
print(global_linear_search(3, [1,2,3,4,17,3,8,3,3,3,1,99]) == [2,5,7,8,9])
print(global_linear_search("1", [1,2,"1",3,4,1.1,"1",17,9]) == [2,6])
print(global_linear_search(5, [1,2,"1",3,4,1.1,"1",17,9]) == [])
print(global_linear_search(1, []) == [])


