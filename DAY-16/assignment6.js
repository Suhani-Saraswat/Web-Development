/* Write an arrow function named arrayAverage that accepts an array of numbers
and returns the average of those numbers. */

let arr1 = [9,8,4,3,2,1];
const arrayAverage = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(`Average of numbers of array is ${avg}`);
}
arrayAverage(arr1);

/* Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not. */

let n = 8;
const isEven = (num) => {
    if(num%2 == 0){
        console.log(`${num} is an even number`);
    }else {
        console.log(`${num} is an odd number`);
    }
}
isEven(n);

/* Predict the output of the code. */

const object1 = {
    message:'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(object1.logMessage,1000);

/* Predict the output of the code. */

let length=4;
function callback() {
    console.log(this.length);
}
const object = {
    length : 5,
    method(callback) {
        callback();
    },
};
object.method(callback,1,2);

