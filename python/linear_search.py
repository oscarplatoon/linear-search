array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    i=0 
    while i< len (array_to_search_through):
        if array_to_search_through[i] == value_to_find:
            return i
        i += 1
    return None

def global_linear_search(value_to_find, array_to_search_through):
    output = []
    i=0 
    while i< len (array_to_search_through):
        if array_to_search_through[i] == value_to_find: # Enumerate
            #If we find our value return index
            output.append(i)
        i += 1
    return output
