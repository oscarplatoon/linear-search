array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    try:
        index_list = linear_search_helper(value_to_find, array_to_search_through, True)
        return index_list[0]
    except:
        return None


def global_linear_search(value_to_find, array_to_search_through):
    return linear_search_helper(value_to_find, array_to_search_through, False)


def linear_search_helper(value_to_find, array_to_search_through, find_one_or_all):
    found_index_list = []
    i = 0
    while i < len(array_to_search_through):
        if array_to_search_through[i] == value_to_find:
            # if we find our value, store the index
            found_index_list.append(i)
            # if we only need to find one, return after our first successful search
            if find_one_or_all:
                return found_index_list
        i += 1
    
    return found_index_list