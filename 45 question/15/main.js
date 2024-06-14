var guestList = ["Muhammad Shahid", "Hamzah Mirzah", "Rakhmin Gul"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aasakta");
guestList.splice(0, 1, "Muhammad Zahid");
guestList.forEach(function (List) { return console.log("Hello, how are you ".concat(List, ", would you like to dinner with me on Sunday.")); });
