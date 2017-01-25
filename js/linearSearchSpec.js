var ls = require("./linearSearch");

console.log(ls.linearSearch(3, [1,2,3]) === 2);
console.log(ls.linearSearch(4, [1,2,3]) === undefined);
console.log(ls.linearSearch(13, [1,2,3]) === undefined);
