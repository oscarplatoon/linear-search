def linear_search(value, array):
	result = []
	for index, item in enumerate(array):
		if (item == value):
			result.append(index)
	if len(result) == 0:
		return None
	return result