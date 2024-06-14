// making a arrey of country in original order.
let placesCountrytoVisit: string [] = ["China,", "Dubai", "Brazil", "Saudi Arabia", "Qatar"]; 
console.log("original order", placesCountrytoVisit);

// print the arrey in Alphabetical order without modifying the actual arrey.
console.log("Alfabetical Order:", [...placesCountrytoVisit].sort());

// show that arrey is still in origianl order.
console.log("still in original order", placesCountrytoVisit);

// print the arrey in reversed order without modifying the actual arrey list.
console.log("reverse order", [...placesCountrytoVisit].reverse());

// show that arrey is still in origianl order.
console.log("still in original order", placesCountrytoVisit);

// we have changed the origianl arrey list.
console.log("original arrey reversed", placesCountrytoVisit.reverse());

// print the arrey to show that its back to its original order.
console.log("back to original order list", placesCountrytoVisit.reverse());

// print the arrey to show that its order has changed in Alphabetical order.
console.log("sorted in Alphabetical order:", placesCountrytoVisit.sort());


// we have changed again origianl arrey list.
console.log("original arrey reversed again", placesCountrytoVisit.reverse());
 