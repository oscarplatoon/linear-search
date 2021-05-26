
const linearSearch = (item, array) => {
    let result = []
    array.forEach((elem, index) => {
        if (elem === item) result.push(index)
    })
    return result
}

console.log(linearSearch('a', ['b','a','n','a','n','a']))

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {

};

