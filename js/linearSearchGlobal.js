const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let targetVal = valueToFind;
    let result = [];
    for (let i = 0; i < arrayToSearchThrough.length; i++) {

        if(arrayToSearchThrough[i] == targetVal) {
            result.push(i);
        }
    }
    return result;
}