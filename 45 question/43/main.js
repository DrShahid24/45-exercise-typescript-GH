// Define the names of magician's name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
// function to make magician great through.map which will modify.
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define array of magicians name.
var magician_names = ["Hamzah", "Shahid", "Rashid"];
// Making a copy of original magician_name array through slice() function.
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names.
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays original and copied.
// Original Array.
console.log("Original Array\n");
show_magicians(magician_names);
// Copied Array.
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
