/* User enters a max number & then tries to guess a randam generated number between 1 to max. */

const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log(`Your guess is right! Congrats! Random number is ${random}`);
        break;
    }else if(guess < random){
        guess = prompt("Hint : Your guess is too small. Please guess again");
    }else {
        guess = prompt("Hint : Your guess is too large. Please guess again");
    }
}