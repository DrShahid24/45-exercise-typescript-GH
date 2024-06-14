//Define a function to creat a car object with optional options. 
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initilize a car object with manufacturer and model.
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Additional options to the car object.
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object.
var myCar = createCar("Toyota", "Corrolla", "Color: White", "Speed: 150km");
// Print the object to make sure that all the information was stored correctly.
console.log(myCar);
