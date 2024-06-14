// making variables
let banana = "banana";
let upperCaseApple = "APPLE"
let twenty = 20;
let ten = 10;
let fruits = ["Apple", "Orange", "Banana"];

// test for equality and inequality.
console.log("\nTest for equality and inequality.");
console.log("is banana equal to banana?");
console.log(banana == "banana");

console.log("\nis banana not equal to banana?");
console.log(banana != "banana");


// tests using lower case function.
console.log("\nTest for lower case function.")
console.log("is apple equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nis APPLE not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// Numerical tests
// euqality test
console.log("\nis twenty equal to ten?");
console.log(twenty == ten);

// inequality test.
console.log("\nis ten is not equal to 20?");
console.log(ten != twenty);

// greater than
console.log("\nis 10 greater than 5?");
console.log(ten > 5);

//  less than
console.log("\nis twenty less than ten?");
console.log(twenty < ten);

// greater than or equal to 
console.log("\nis ten greater than or equal to 5?");
console.log(ten >=5);

// less than or equal to
console.log("\nis twenty less than or equal to 10?");
console.log(twenty <= 10);

// Tests using "and" and "Operators".
// using && (and)
console.log("\ntwenty is not equal to 10 and 20 is greater than 10");
console.log(twenty != 10 && 20 > 10); 

console.log("\ntwenty is not equal to 10 and 20 is greater than 25");
console.log(twenty != 10 && 20 > 25); 


// || (or)
console.log("\n 20 is greater than 50 Or 20 is equal to twenty");
console.log(20 > 50 || 20 ==20);

console.log("\n 20 is greater than 50 Or 20 is not equal to twenty");
console.log(20 > 50 || 20 !=20);



// Test whether an item is include in arrey
console.log("\nis Orange include in my fruits arrey?");
console.log(fruits.includes("Orange"));

// not include
console.log("\nis Orange not include in my fruits arrey?");
console.log(!fruits.includes("Orange"));







