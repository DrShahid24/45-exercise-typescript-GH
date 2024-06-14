// List of guest List in arrey.
var guestList = ["Muhammad Shahid", "Humzah Murza", "Rakhmin Gul", "Zain"];
// one guest in not available.
var dontCome = guestList[0];
// Printing the name of guest and message.
console.log(dontCome, "Nahi Aasakta");
// add and remove guest from arrey.
guestList.splice(0, 1, "Muhammad Zahid");
// message that we have a bigger dinner.
console.log("good news we have found a bigger table for Dinner");
// adding a new guest in the biggener of the arrey.
guestList.unshift("Mobin Moiz");
// adding a new guest at ending of the arrey.
guestList.push("Muhammad Tahir");
// get a middle index of our guestlist of arrey.
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of arrey.
guestList.splice(middleIndex, 0, "Shahzad");
console.log("updated new guest List for dinner");
guestList.forEach(function (List) { return console.log("Hello, how are you ".concat(List, ", would you like to dinner on Sunday.")); });
