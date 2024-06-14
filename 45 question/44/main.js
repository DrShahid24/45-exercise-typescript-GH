// Define a function with a rest parameter that eccept items arguments representing sandwich.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a different items of Sandwich\n");
    items.forEach(function (Single) { return console.log(Single); });
    console.log("\nNow Enjoy delicious Sandwich\n");
}
// Call the function three items, using a differnt number of arguments.
makeSandwich("Cheese", "Butter", "Mayoneese");
makeSandwich("Bread", "Egg");
makeSandwich("Bread", "Chicken", "Egg", "Onion", "Butter", "Mayoneese");
