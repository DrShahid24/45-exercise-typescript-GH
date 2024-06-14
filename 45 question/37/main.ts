// Creating function by default size and message.
function make_Shirt(size:string = "large", message:string = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with ${message} prints on shirt`)
};

// Calling function by default.
make_Shirt();

// Calling function by mediam size and by default message.
make_Shirt("mediam")

// Calling function by any size and different message.
make_Shirt("Small", "I Love Governer Sindh Artificial Initiative Program")