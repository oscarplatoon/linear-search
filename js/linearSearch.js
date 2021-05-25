//const arrayToSearchThrough = [];
//for (let i = 1; i <= 1000; i++) {
//    arrayToSearchThrough.push(i);
//}

//console.log(ls.linearSearch(3, [1,2,3]) === 2);
//console.log(ls.linearSearch(4, [1,2,3]) === undefined);
//console.log(ls.linearSearch(13, [1,2,3]) === undefined);

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
  let answer = []
  for(let i=0; i<arrayToSearchThrough.length; i++){
      if(arrayToSearchThrough[i] === valueToFind){
          return i
      }
  }  
};

