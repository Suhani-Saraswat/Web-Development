let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log("data1 - ", data1);