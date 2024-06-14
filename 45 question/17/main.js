// List of guest List in arrey.
var guestList = ["Muhammad Shahid", "Humzah Murza", "Rakhmin Gul", "Zain"];
// one guest in not available.
var dontCome = guestList[0];
// Printing the name of guest and message who is not available..
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
// updated message for dinner.
console.log("updated new guest List for dinner");
// invitations for all guests.
guestList.forEach(function (List) { return console.log("Hello, how are you ".concat(List, ", would you like to dinner on Sunday.")); });
// dinner table wont arrive on time i can invite only two guests.
console.log("unfortunately dinner table wont arive on time so i can invite only two guests for dinner with me on sunday.");
// removing guest list until only two names remain.
while (guestList.length > 2) {
    var removeguestList = guestList.pop();
    console.log("Sorry ".concat(removeguestList, ", i can\u2019t invite you to dinner."));
}
// invitation to remaining guests.
console.log("invitation to the last two guests");
guestList.forEach(function (lastTwo) { return console.log("Hello, ".concat(lastTwo, ", you are still in my guest list and have a dinner with me.")); });
// removing remaining two guest from the list.
guestList.pop();
guestList.pop();
// checking list that is it empty or not.
console.log("Empty List", guestList);
