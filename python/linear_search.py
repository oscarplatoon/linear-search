array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

# Forbidden via the readme
# def linear_search(value_to_find, array_to_search_through):
#     if value_to_find in array_to_search_through:
#         return array_to_search_through.index(value_to_find)

def linear_search(value_to_find, array_to_search_through):
    length = len(array_to_search_through)

    for x in range(0, length):
        if array_to_search_through[x] == value_to_find:
            return x

def global_linear_search(value_to_find, array_to_search_through):
    result = []

    for index in range(0, len(array_to_search_through)):
        if array_to_search_through[index] == value_to_find:
            result.append(index)
    return result