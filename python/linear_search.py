array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    
    for index in range(len(array_to_search_through)):
        if array_to_search_through[index] == value_to_find:
            return index
    
    return None

def global_linear_search(value_to_find, array_to_search_through):

    values = []

    for index in range(len(array_to_search_through)):
        if array_to_search_through[index] == value_to_find:
            values.append(index)
    
    return values