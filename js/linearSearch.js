exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    let answer = [];
    for (key in arrayToSearchThrough){
        if(valueToFind == arrayToSearchThrough[key]){
            answer.push(parseInt(key))
        }
    }

    if(answer.length == 0){
        return undefined 
    }
    else if (answer.length == 1){
        return answer[0]
        
    }
    else{
        return answer
    }
};


exports.linearSearchGlobal = function(vtofind,array){
    let x = exports.linearSearch(vtofind,array)
    let final = []
    if(Number.isInteger(x)){
        final.push(x);
        return final
    }
    else{
        return x
    }

}
