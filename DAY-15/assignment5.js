/* Write a JavaScript function that returns array elements larger than a number. */

let arr = [2,3,5,6,9,4,8];
let num = 6;
function getElement(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
getElement(arr, num);

/* Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abcdefgh” */

let str = "abcdabcdefgggh";
let ans = "";
function uniqueChar(str) {
    for(let i=0; i<str.length; i++){
        if(ans.indexOf(str[i]) == -1){
            ans += str[i];
        }
    }
    console.log(ans);
}
uniqueChar(str);

/* Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example: country = ["Australia","Germany","United States of America"]
output: "United States of America" */

let country = ["Australia","Germany","United States of America"];
let output = "";
function longestCountry(arr) {
    let ansidx = 0;
    let max = arr[ansidx].length;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > max){
            ansidx = i; 
        }
    }
    console.log(country[ansidx]);
}
longestCountry(country);

/* Write a JavaScript function to count the number of vowels in a String argument. */

str = "abcienfaoechuitym";
let count = 0;
function countVowel(str) {
    for(let i=0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count++;
        }
    }
    console.log(count);
}
countVowel(str);

/* Write a JavaScript function to generate a random number within a range (start,
end). */

let start = 1;
let end = 6;
function random(start, end) {
    let rand = Math.floor(Math.random() * end) + start;
    console.log(rand);
}
random(start, end);