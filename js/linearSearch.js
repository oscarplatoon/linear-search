const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

function linearSearch(valueToFind, arrayToSearchThrough) {
    
    var indexLocations = []

    
    
    for (var i = 0; i < arrayToSearchThrough.length; i++) {
        if (typeof arrayToSearchThrough.indexOf(valueToFind) != "number") {
            console.log("undefined")
            break;
        }
      if (arrayToSearchThrough[i] == valueToFind) {
          //indexLocations = []ac
          indexLocations.push(i)
      } 
      
    }
    
    return indexLocations
};

console.log(linearSearch(2, [1,2,3]))// === 1);
console.log(linearSearch(13, [1,2,3]))// === undefined);

console.log(linearSearch("a", ["b", "a", "n", "a", "n", "a", "s"]))//, [1, 3, 5]))
console.log(linearSearch("s", ["b", "a", "n", "a", "n", "a", "s"]))//, [6]))
