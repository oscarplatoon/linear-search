def linear_search(value_to_find,array_to_search_through):
    # your code here
    for x in range(len(array_to_search_through)):
        if array_to_search_through[x] == value_to_find:
            return x
            
    else:
        return None

def global_linear_search(value_to_find,array_to_search_through):
    result_arr = []

    for x in range(len(array_to_search_through)):
        if array_to_search_through[x] == value_to_find:
            result_arr.append(x)
    return result_arr
    