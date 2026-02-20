let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    //console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});