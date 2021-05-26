def linear_search(value_to_find, array_to_search_through):
    answer = []
    count = 0
    for x in array_to_search_through:
        if(x == value_to_find):
            answer.append(count)
        count += 1
    if (answer == []):
        return None
    elif(len(answer)==1):
        return answer[0]
    else:
        return answer


