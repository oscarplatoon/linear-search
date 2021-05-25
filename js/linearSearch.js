function global_linear_search(a, array){
    

var arrayToSearchThrough = [];
for (let i = 0; i < array.length; i++) {
    //var x=a;
    if (array[i]===a){
    arrayToSearchThrough.push(i);
    }
}
console.log(arrayToSearchThrough);
}

var bananas = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
global_linear_search('a', bananas);