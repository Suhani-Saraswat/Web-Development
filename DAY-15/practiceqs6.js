// Create a function that returns the concatenation of all strings in an array.

let str = ["Hi ", "Hello ", "Bye ", "!"];
function concat(arr){
    let result = "";

    for(let i=0; i<arr.length; i++){
        result += arr[i];
    }

    return result;
}
