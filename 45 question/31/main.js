// Creating an Array.
var userName = ["Muhammad Shahid", "Admin", "Muhammad Tahir", "Muhammad Zahid", "Musfira"];
// Removing all values from the Array.
userName = [];
// Printing a massage if array is empty.
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    // using forEach loop on array.
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello, ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello, ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
