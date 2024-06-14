let guestList = ["Muhammad Shahid", "Hamzah Mirzah", "Rakhmin Gul"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi aasakta");

guestList.splice(0,1, "Muhammad Zahid");

guestList.forEach(List => console.log(`Hello, how are you ${List}, would you like to dinner with me on Sunday.`));