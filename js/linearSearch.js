const linearSearch = (val, arr) => {

    for (let i = 0; i < arr.length; i++){

        if (val == arr[i]){

            return i;
        }
    }
    return undefined;
};

const linearSearchGlobal = (val, arr) => {

    let resultArray = [];
    for (let i = 0; i < arr.length ; i++){
        if (val == arr[i]){
            resultArray.push(i);
        }
    }
    return resultArray;
};

/*exports.linearSearch = function(valueToFind, arrayToSearchThrough) {

};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {

};*/

console.log(linearSearchGlobal("a", ["b", "a", "n", "a", "n", "a", "s"]));
