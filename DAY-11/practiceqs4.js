/* A "Good String" is a string that starts with the letter 'a' & has a length > 3. Write 
a Program to find if a string is good or not.*/

let str = "snake";

if((str[0] === 'a') && (str.length > 3)){
    console.log(`${str} is a good string`);
}else{
    console.log(`${str} is not a good string`);
}

// Predict the output of following code:

let num = 12;
if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))){  //true && (false || true) => true && true => true
    console.log("safe");  //safe
}else{
    console.log("unsafe");
}
