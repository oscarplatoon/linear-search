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

exports.linearSearchGlobal = function(valToFind, arrToSearchThrough) {
    let targetVal = valToFind;
    let result = [];
    for (let i = 0; i < arrToSearchThrough.length; i++) {
  
        if(arrToSearchThrough[i] == targetVal) {
            result.push(i);
        }
    }
    return result;
  } 
  