//import { shallowEqualArrays } from "shallow-equal";

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
  
  for(let i=0; i<arrayToSearchThrough.length; i++){
      if(arrayToSearchThrough[i] === valueToFind){
          return i
      }
  }  
};

//console.log(shallowEqualArrays(ls.linearSearchGlobal("a", ["b", "a", "n", "a", "n", "a", "s"]), [1, 3, 5]))
//console.log(shallowEqualArrays(ls.linearSearchGlobal("s", ["b", "a", "n", "a", "n", "a", "s"]), [6]))
//console.log(shallowEqualArrays(ls.linearSearchGlobal("n", ["b", "a", "n", "a", "n", "a", "s"]), [2, 4]))
var shallowEqualArrays = require('shallow-equal/arrays');

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
  let answer = [];
  for(let i=0; i<arrayToSearchThrough.length; i++){
      if(shallowEqualArrays(arrayToSearchThrough[i], valueToFind)){
          answer.push(i)
          //shallowEqualArrays([1, 2, 3], [1, 2, 3]);
      }
  }  
  return answer
};



