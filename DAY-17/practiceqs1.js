/* Check if all numbers in our array are multiples of 10 or not. */

let arr = [20,10,30,40,50,60];
let isMultiple = arr.every((el) => (el%10 == 0));
console.log(isMultiple);

/* Create a function to find the min number in an array. */

arr = [1,2,3,4,5,-1,6,7,8];
const min = (...args) => {
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        }else {
            return min;
        }
    });
}
console.log(min(...arr));