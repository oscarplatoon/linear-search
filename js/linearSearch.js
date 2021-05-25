const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    let targetVal = valueToFind;
    let result = undefined;
    for (let i = 0; i < arrayToSearchThrough.length; i++) {

        if(arrayToSearchThrough[i] == targetVal) {
            result = i;
        }
    }
    return result;
}


