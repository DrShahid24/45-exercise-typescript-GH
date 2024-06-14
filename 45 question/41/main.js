// define a function to print each magician name.
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define Array containing maginians name.
var magician_name = ["Hamzah", "Shahid", "Usman"];
// Calling the function to print each magician.
show_magicians(magician_name);
