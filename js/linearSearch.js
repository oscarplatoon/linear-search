function linearSearch(valueToFind, arrayToSearchThrough) {
    
    var indexLocations = []

    
    
    for (var i = 0; i < arrayToSearchThrough.length; i++) {
       
        
      if (arrayToSearchThrough[i] == valueToFind) {
          
          indexLocations.push(i)
          i++
      } 
    }
    
    if (indexLocations.length >= 1) {
      return indexLocations
    } else {
      return "undefined"
    }
};

console.log(linearSearch(2, [1,2,3]))// === 1);
console.log(linearSearch(13, [1,2,3]))// === undefined);

console.log(linearSearch("a", ["b", "a", "n", "a", "n", "a", "s"]))//, [1, 3, 5]))
console.log(linearSearch("s", ["b", "a", "n", "a", "n", "a", "s"]))//, [6]))
