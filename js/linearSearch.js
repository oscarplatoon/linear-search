const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) {
            return i;
        }
    }

    return undefined;
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let output = [];
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) {
            output.push(i);
        }
    }
    return output;
}