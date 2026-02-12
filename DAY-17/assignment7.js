/* Square and sum the array elements using the arrow function and then find the
average of the array. */

let arr = [1,2,3,4,5,6,7,8,9];
let square = arr.map((el) => (el*el));
console.log(square);
let sum = square.reduce((acc, el) => acc + el);
console.log(sum);
let avg = sum/arr.length;
console.log(avg);

/* Create a new array using the map function whose each element is equal to the
original element plus 5. */

let arr1 = [1,2,3,4,5];
let result = arr1.map((el) => (el + 5));
console.log(result); 

/* Create a new array whose elements are in uppercase of words present in the
original array. */

let arr2 = ["how","are","you","!"];
let res = arr2.map((str) => str.toUpperCase());
console.log(res);

/* Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled. */

const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map((v)=>v*2),
];
console.log(doubleAndReturnArgs([1,2,3],4,4)); //[1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)); //[2,20,8]

/* Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object. */

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4})); //{a:1,b:2,c:3,d:4}


