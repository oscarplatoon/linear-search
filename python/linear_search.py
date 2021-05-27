array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    # loop through array
    i = 0
    while i < len(array_to_search_through):
        if array_to_search_through[i] == value_to_find:
            # if we find our value, return the index
            return i
        i += 1

    # if we don't find our value, return None
    return None


def global_linear_search(value_to_find, array_to_search_through):
    found_index_list = []
    i = 0
    while i < len(array_to_search_through):
        if array_to_search_through[i] == value_to_find:
            # if we find our value, store the index
            found_index_list.append(i)
        i += 1

    return found_index_list
    