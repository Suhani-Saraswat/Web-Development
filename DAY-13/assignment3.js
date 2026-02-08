/* Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example: if arr = [1,2,3,4,5,6,2,3] & num=2 
Result should be arr = [1,3,4,5,6,3] */

let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);

/* Write a JS program to find the no of digits in a number.
Example: if number = 287152, count = 6 */

let number = 287152;
let count = 0;
let n = number;
while(n != 0){
    count++;
    n = (n - (n%10)) / 10;
}
console.log(count);

/* Write a JS program to find the sum of digits in a number.
Example: if number = 287152, sum = 25 */

let orgnum = 287152;
let sum = 0;
num = orgnum;
while(num != 0){
    sum += num % 10;
    num = (num - (num%10)) / 10;
}
console.log(sum);

/* Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a 
given positive integer and denoted by that integer.]
Example: 
    7!(factorial of 7) = 1x2x3x4x5x6x7 = 5040
    5!(factorial of 5) = 1x2x3x4x5 = 120
    3!(factorial of 3) = 1x2x3=6
    0! Is always 1 */

n = prompt("Enter a number:");
let fact = 1;
for(let i=1; i<=n; i++){
    fact *= i;
}
console.log(fact);

/* Find the largest number in an array with only positive numbers. */

let arr1 = [1,7,8,9,13,4,6];
let max = arr1[0];
for(let i=0; i<arr1.length; i++){
    if(arr1[i] > max){
        max = arr1[i];
    }
}
console.log(max);


