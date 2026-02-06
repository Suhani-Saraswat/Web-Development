/* Create a number variable num with some value.
Now, print “good” if the number is divisible by 10 and print “bad” if it is not. */

let num = 20;

if(num%10 === 0){
    console.log("good");
}else{
    console.log("bad");
}

/* Take the user's name & age as input using prompts.
Then return back the following statement to the user as an alert (by substituting
their name & age):
name is age years old. */

let userName = prompt("Enter your user name ");
let age = prompt("Enter your age ");
msg = `${userName} is ${age} years old.`;
alert(msg);

/* Write a switch statement to print the months in a quarter.
Months in Quarter 1 : January, February, March
Months in Quarter 2 : April, May, June
Months in Quarter 3 : July, August, September
Months in Quarter 4 : October, November, December */

let quarter = 1;

switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default :
        console.log("Invalid Quarter!");
        break;
}

/* A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
length greater than 5.
For a given string print if it is golden or not. */

let str = "Apples";

if(((str[0] === 'A') || (str[0] === 'a')) && (str.length > 5)){
    console.log("Golden String!");
}else{
    console.log("Not a Golden String!");
}

/* Write a program to find the largest of 3 numbers. */

let num1 = 4;
let num2 = 8;
let num3 = 9;

if((num1 > num2) && (num1 > num3)){
    console.log(`${num1} is the greatest number.`)
}else if((num2 > num1) && (num2 > num3)){
    console.log(`${num2} is the greatest number.`);
}else{
    console.log(`${num3} is the greatest number.`);
}

/* Write a program to check if 2 numbers have the same last digit.
Eg : 32 and 47852 have the same last digit i.e. 2 */

let no1 = 123;
let no2 = 156;

if((no1%10) === (no2%10)){
    console.log(`Both numbers have same last digit ${no1%10}`);
}else{
    console.log(`Both numbers do not have same last digit as ${no1%10} is not equal to ${no2%10}`);
}