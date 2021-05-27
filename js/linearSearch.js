const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    for(i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] == valueToFind) {
            return i
        }
    }
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    var results = []
    for(i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] == valueToFind) {
            results.push(i)
        }
    }
    return results
};

