/* Add the following elements to the container using only javascript and the DOM methods.
i. a <p> with red text that says "Hey I'm red!" */

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

/* ii. an <h3> with blue text that says "I'm a blue h3!" */

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

/* a <div> with a black border and pink background color with the following elements inside of it:
1. another <h1> that says "I'm in a div"
2. a <p> that says "Me TOO!" */

let div = document.createElement("div");
document.querySelector("body").append(div);
div.classList.add("div");

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
document.querySelector("div").append(h1);
let para2 = document.createElement("p");
para2.innerText = "Me TOO!";
document.querySelector("div").append(para2);
