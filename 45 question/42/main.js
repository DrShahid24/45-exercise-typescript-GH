// // Define the names of magician's name.
// function show_magicians(magicians:string[]){
//     magicians.forEach (name => console.log(name));
// };
// // function to make magician great through.map which will modify.
// function make_great(magicians:string[]){
//    return magicians.map(name => `The Great ${name}`)
// }
// // Define array of magicians name.
// let magician_names = ["Hamzah", "Shahid", "Rashid"]
// // Call make great magician.
// let great_magicians = make_great(magician_names)
// // Call show magician after modify.
// show_magicians(great_magicians)
function show_mgicians(megician) {
    megician.forEach(function (name) { return console.log(name); });
}
;
function makemagician(magician) {
    magician.map(function (name) { return console.log("The Great ".concat(name)); });
}
var magician_names = ["Hamzah", "Shahid", "Rashid"];
makemagician(magician_names);
