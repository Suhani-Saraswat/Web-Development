// Using Callback hell ->

/* function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    if (internetSpeed > 4){
        success();
    } else {
        failure();
    }
}

saveToDb("Apna College", 
    () => {
        console.log("success : data saved! ");
        saveToDb("Hello", 
            () => {
                console.log("success2 : data 2 saved! ");
                saveToDb("Suhani", 
                    () => {
                        console.log("success3 : data 3 saved! ")
                    },
                    () => {
                        console.log("failure3 : weak connection. data 3 not saved! ");
                    }
                );
            },
            () => {
                console.log("failure2 : weak connection. data 2 not saved! ");
            }
        );
    }, 
    () => {
        console.log("failure : weak connection. data not saved! ");
    }
); */

// Using Promises function ->

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success : data was saved");
        }else {
            reject("failure : weak connection");
        }
    });
}

saveToDb("apna college")
    .then((result) => {
        console.log("data 1 saved");
        console.log("result of promise: ", result);
        return saveToDb("hello world");
    })
    .then((result) => {
        console.log("data 2 saved");
        console.log("result of promise: ", result);
        return saveToDb("Suhani")
    })
    .then((result) => {
        console.log("data 3 saved");
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log("error of promise: ", error);
    });

    