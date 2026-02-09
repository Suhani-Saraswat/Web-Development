/* Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6].*/

let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll);

/* Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name.*/

const car = {
    name: "XUV",
    model: "XUV 3XO EV",
    color: "Black"
};
console.log(car);

/* Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States.*/

const Person = {
    name: "Simran",
    age: 20,
    city: "Delhi"
};
console.log(Person);
Person.city = "New York";
console.log(Person.city);
Person.country = "United States";
console.log(Person);

