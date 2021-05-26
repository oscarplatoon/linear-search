array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    count = -1
    for element in array_to_search_through:
        count += 1
        if element == value_to_find:
            return count



def linear_search_global(value_to_find, array_to_search_through):
    count = -1
    index_list = []
    for element in array_to_search_through:
        count += 1
        if element == value_to_find:
             index_list.append(count)
    print(index_list)


