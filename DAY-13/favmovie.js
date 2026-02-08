// Guess the fav movie

const favmovie = "sarzameen";

let guess = prompt("Guess my fav movie");

while(guess != favmovie){
    if(guess != "quit"){
        console.log("You Quit!");
        break;
    }
    guess = prompt("Wrong guess! Please try again");
}

if(guess == favmovie){
    console.log("Congrats!!");
}