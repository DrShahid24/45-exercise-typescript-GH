// Creating an array.
let userName = ["Muhammad Shahid", "Admin", "Muhammad Tahir", "Muhammad Zahid", "Musfirah"];


// using forEach loop on array.
userName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello, ${oneUser}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello, ${oneUser}, thank you for logging in again.`)
    }
});
