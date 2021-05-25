const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    
  for(let i = 0; i < valueToFind.length; i++){
        
       if(valueToFind[i] === arrayToSearchThrough)
            return i;
        }
        
        return undefined;
    };

      
exports.linearSearchGlobal = function (valueToFind, arrayToSearchThrough) {
    let results = [];
    
    for(let i = 0; i < valueToFind.length; i++){
        
        if(valueToFind[i] === arrayToSearchThrough){
            results.push(i);
        }
    }
    
    if(!results){
        return -1;
    }
    return results;
};


