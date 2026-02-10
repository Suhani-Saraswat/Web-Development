// Create a function that prints the multiplication table of a number.

function multiplicativeTable(num) {
    for(let i=1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

multiplicativeTable(9);