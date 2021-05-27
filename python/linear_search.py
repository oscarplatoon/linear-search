array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # your code here
    # print('Value:',value_to_find)
    # print('Array:',array_to_search_through)

    new_index = []

    # iterating the length of list to search for value, return index of value
    for index in range(len(array_to_search_through)):
        if (array_to_search_through[index] == value_to_find):
            # print('Index:', index)
            new_index.append(index)
            # return new_index

    return new_index

# print(linear_search(3, [1,2,3]))
# print(linear_search(5, [1,2,3,5,5]))