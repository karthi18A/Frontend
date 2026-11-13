// 1. Conditional Statements (If / Else)

let age = 19;

// Simple if statement
if (age) {
    console.log("Eligible");
}

// if...else statement
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// else if ladder
let babyage = 10;

if (babyage === 5) {
    console.log("Join LKG");
} else if (babyage === 6) {
    console.log("Join UKG");
} else if (babyage >= 7) {
    console.log("Not suitable for Nursery");
} else {
    console.log("Let them play");
}

// 2. The switch Statement

let time = 12;

switch (time) {
    case 6:
        console.log("Good Morning")
        break;
    case 12:
        console.log("Good Noon")
        break;    
    default:
        console.log("Not a proper time")
        break;
}

// 3. Functions

function add (a,b){
   return a+b
}
console.log(add(10,20))