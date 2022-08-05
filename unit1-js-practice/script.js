document.write("JavaScript works!")
console.log ("Hello console!")
console.warn("This is only a test!")
/* let is a variable*/
let myname = "Dominic Morro";
let workFromHome = true;
let side = 15;
let radius = 10;

console.log("My name is " + myname);
console.log(`I work from home: ${workFromHome}`);
console.log("The length of each side of the square is " + side)
console.log("The radius of the circle is " + radius);

let squareArea = side * side;
let squarPerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log ("The square area is " + squareArea + "and the perimeter is " + squarPerimeter);
console.log("The circle area is " + circleArea + "and the perimeter is" + circlePerimeter);
console.log("The travel options are: ");

let travelOptions = [ "foot", "bike", "car", "airplane" ];
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

let travelType = prompt ("How would you like to travel? The travel options are: foot, bike, car, airplane");

while (!travelOptions.includes(travelType))  {
    travelType = prompt ("That was an invalid travel type. Please select a valid travel type.The travel options are: foot, bike, car, airplane");
}

let distance = 100;
let time = 0;
let cost = 0;
/* conditionals if and if else statements */
if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
}
else if (travelType === "bike") {
    var rentBike = prompt("Do you need to rent the bike? (yes or no)");
    if (rentBike === "yes") {
        console.log("Bike rental is $45! Speed is 10mph.");
        cost = 45;
    } else {
    console.log("Biking os free! Speed is 10mph.");
    cost = 0;
    }
    time = distance / 10;
}
else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
}
else if (travelType === "airplane") {
     console.log("Flying is $0.10/mi. Speed is 400pmh.");
    let passengers = parseInt( prompt("How many passengers?") );
    while (passengers == 0){
        passengers = parseInt( prompt("Cannot be 0. Please try again."))
    }
    cost = 0.10 * distance * passengers;
    time = distance / 400;
} else {
    console.log(`Sorry. ${travelType} is an invalid option. `);
}
console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

/*for loops, syntax looks like: for (initialization; expression; update) {
// code block to be executed 
    }  
    EXAMPLE: for (let i = 1; i <= 3; i++) {
  console.log(i);
}  */

let costBar = "Cost: ";
// Or if users input equals 
if (travelType == travelOptions[2] || (travelType == travelOptions[1] && rentBike=="yes") || (travelType == travelOptions[3])){
    for (let x = 1; x <= cost; x++ ){
        costBar += "$";
    }
}
console.log(costBar);
let timeBar = "Time: ";
for (let x = 1; x <= time; x++ ){
    timeBar += "/";
}
console.log(timeBar)
