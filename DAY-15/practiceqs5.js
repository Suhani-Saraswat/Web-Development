// Create a function that returns the sum of numbers from 1 to n.

function sumOfNaturalNo(n) {
    let sum = 0;
    for(let i=0; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfNaturalNo(5));