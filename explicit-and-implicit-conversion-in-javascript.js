/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);// added Number conversion function to be more precise and add clarity

let isValid = Boolean(false);//Changed the string to boolean so that it would evaluate false
if (isValid) {
    console.log("This is valid and true");
}
else {
  console.log("This is valid and false!");
}

let age = "25";
let totalAge = Number(age) + 5; // added Number() function so that we are adding and not concatenating
console.log("Total Age: " + totalAge);

//implicit conversion of null to false
let hat = null;

if (hat) {
  console.log("Check out my hat!")
}
else {
  console.log("I have no hat, but check out my haircut!")
}

//explicit conversion of number to boolean

let numberOfHats = 0;
let hasAHat = Boolean(numberOfHats)
if (hasAHat) {
  console.log("I have at least one hat")
}
else {
  console.log("I don't have a hat in the world")
}
