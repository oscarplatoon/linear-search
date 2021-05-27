from linear_search import linear_search
# modified test cases

bananas_list = list('bananas')

print(linear_search(3, [1,2,3]) == [2])
print(linear_search(4, [1,2,3]) == [])
print(linear_search(13, [1,2,3]) == [])

print(linear_search(10, [1,2,3,2,10,0]) == [4])
print(linear_search('a', [1,2,3,'a',9]) == [3])
print(linear_search(5, [1,2,3,5,5]) == [3,4])

print(linear_search('b', bananas_list) == [0])
print(linear_search('a', bananas_list) == [1,3,5])
print(linear_search('n', bananas_list) == [2,4])
print(linear_search('s', bananas_list) == [6])
