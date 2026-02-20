let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});