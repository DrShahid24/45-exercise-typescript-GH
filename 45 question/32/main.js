// Array of current Users.
var current_users = ["Shahid", "Musfirah", "Hani", "Hadi", "Zahid"];
// Array of new Users.
var new_users = ["Rashid", "shahid", "Shahzad", "Ali", "Musfirah"];
// Loop through new_Users to check for usernames availability.
new_users.forEach(function (new_one_user) {
    var condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken."));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
