var ls = require("./linearSearch");
var shallowEqualArrays = require('shallow-equal/arrays');

 console.log(ls.linearSearch(3, [1,2,3]) === 2);
 console.log(ls.linearSearch(4, [1,2,3]) === undefined);
 console.log(ls.linearSearch(13, [1,2,3]) === undefined);
 console.log(ls.linearSearch("a", []) === undefined)

 console.log(shallowEqualArrays(ls.linearSearchGlobal("a", ["b", "a", "n", "a", "n", "a", "s"]), [1, 3, 5]))
 console.log(shallowEqualArrays(ls.linearSearchGlobal("s", ["b", "a", "n", "a", "n", "a", "s"]), [6]))
 console.log(shallowEqualArrays(ls.linearSearchGlobal("n", ["b", "a", "n", "a", "n", "a", "s"]), [2, 4]))
 console.log(shallowEqualArrays(ls.linearSearchGlobal("a", ["b", "a", "n", "a", "n", "a", "s"]), [1, 3, 5]))
 console.log(shallowEqualArrays(ls.linearSearchGlobal("s", ["b", "a", "n", "a", "n", "a", "s"]), [6]))
 console.log(shallowEqualArrays(ls.linearSearchGlobal("n", ["b", "a", "n", "a", "n", "a", "s"]), [2, 4]))
 console.log(shallowEqualArrays(ls.linearSearchGlobal("b", ["b", "a", "n", "a", "n", "a", "s", "b", "a", "b"]), [0, 7, 9]))

 //no match test
 console.log(shallowEqualArrays(ls.linearSearchGlobal("z", ["b", "a", "n", "a", "n", "a", "s"]), []));
 // == comparison test
 console.log(shallowEqualArrays(ls.linearSearchGlobal(7, ["7", "3", "6", "6", "5", "4"]), [0]));
 //NaN comparison test, should be false
 console.log(shallowEqualArrays(ls.linearSearchGlobal(NaN, [NaN, "3", "6", "6", "5", "4"]), [0])); 