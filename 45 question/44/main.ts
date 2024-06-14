// Define a function with a rest parameter that eccept items arguments representing sandwich.
function makeSandwich(...items: string[]){
    console.log("\n Making a different items of Sandwich\n")

    items.forEach(Single => console.log(Single))
    console.log("\nNow Enjoy delicious Sandwich\n")
}
// Call the function three items, using a differnt number of arguments.

makeSandwich("Cheese", "Butter", "Mayoneese")

makeSandwich("Bread", "Egg",)

makeSandwich("Bread", "Chicken", "Egg", "Onion", "Butter", "Mayoneese")
