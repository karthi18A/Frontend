// 1. Object Methods & Filtering
let emp = {
    eName: "Karthik",
    eId: 123,
    ePassword: "456789"
}

// Object.freeze(emp)
// Object.seal(emp)

emp.eName = "Karthik Kadire"
emp.eSal = 60000

console.log(Object.keys(emp));
console.log(Object.values(emp));
console.log(Object.entries(emp));
console.log(Object.isFrozen(emp));
console.log(Object.isSealed(emp));

let b = Object.fromEntries(Object.entries(emp).filter(([key])=>key !== "ePassword"))
console.log(b);

// 2. Function Call, Apply, and Bind

let person = {
    pName: "Karthik"
}

function greeting(greet, city){
    console.log(`${greet},i am ${this.pName} and i am from ${city}`);
}

greeting.call(person, "Hii", "Tirupati")
greeting.apply(person, ["Hello", "Vijayawada"]);
const x = greeting.bind(person, "Hey", "Visakhapatnam")
x()