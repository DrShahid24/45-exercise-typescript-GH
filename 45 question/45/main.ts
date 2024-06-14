//Define a function to creat a car object with optional options. 
function createCar (manufacturer, model, ...options){

    // Initilize a car object with manufacturer and model.
    let car = {
        manufacturer : manufacturer,
        model: model,
    };

    // Additional options to the car object.
    options.forEach(option=> {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });
    return car;
}

// Call the function to create a car object.
let myCar = createCar("Toyota", "Corrolla", "Color: White", "Speed: 150km");

// Print the object to make sure that all the information was stored correctly.
console.log(myCar);
