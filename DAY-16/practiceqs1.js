/* Write an arrow function that returns the square of the number n. */

const square = (n) => (n * n);

console.log(square(9));
console.log(square(7));

/* Write a function that prints "Hello World" 5 times at intervals of 2s each. */

let id = setInterval(() => {
    console.log("Hello World");
},2000);

setInterval(() => {
    clearInterval(id);
},10000);
