// Creating an array.
var userName = ["Muhammad Shahid", "Admin", "Muhammad Tahir", "Muhammad Zahid", "Musfirah"];
// using forEach loop on array.
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello, ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello, ".concat(oneUser, ", thank you for logging in again."));
    }
});
