/* Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7,9,0,-2] and n=3 
Print,[7,9,0] */

let arr1 = [7,9,0,-2];
let n1 = 3;

let result = arr1.slice(0, n1);
console.log(result);

/* Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7,9,0,-2] and n=3
Print,[9,0,-2] */

let arr2 = [7,9,0,-2];
let n2 = 3;

let ans = arr1.slice(arr2.length - n2);
console.log(ans);

/* Write a JavaScript program to check whether a string is blank or not. */

let str = prompt("Enter a String");

if(str.length == 0){
    console.log(`String is Empty!`);
}else {
    console.log(`String is not Empty!`);
}

/* Write a JavaScript program to test whether the character at the given (character)
index is lowercase. */

let str1 = "HeLlO wOrLd";
let idx = 3

if(str1[idx] == str1[idx].toLowerCase()){
    console.log("Character is lowercase");
}else {
    console.log("Character is not lowercase");
}

/* Write a JavaScript program to strip leading and trailing spaces from a string. */

let str2 = prompt("Enter a string");
console.log(`Original String = ${str2}`);
console.log(`String without spaces =  ${str2.trim()}`);

/* Write a JavaScript program to check if an element exists in an array or not. */

let arr = [12,5,9,80,67];
let num = 67;
if(arr.includes(num) != -1){
    console.log(`${num} exists in Array`);
}else {
    console.log(`${num} doesn't exists in Array`);
}