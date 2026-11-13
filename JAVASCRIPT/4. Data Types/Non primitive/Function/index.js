//Anannous
// function(){
//     console.log("i am ananamous")
// }
// ()

//Named function
function Apple(){
    console.log("I am named function")
}
Apple()

//Function with expression
const ball = function(){
    console.log("Function with expression")
}
ball();

//Imediate invoke function
(function(){
    console.log("IIF");
})();

//Arrow Function
const arrow = ()=>{
    console.log("I am arrow");
}
arrow()

//Currying function

function sum(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}
console.log(sum(10)(5)(2))