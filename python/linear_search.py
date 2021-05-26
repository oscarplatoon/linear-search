def linear_search(value, array):
    result = []
    for index, item in enumerate(array):
        if (item == value):
            result.append(index)
# returns None if no index value within array
    if len(result) == 0:
        return None
    return result