let pi = 3.145678965432;

let a=pi.toString()
console.log(a);
console.log(typeof a);

let b = pi.toFixed(2)
console.log(b);
console.log(typeof b);

let c=100000
let d=c.toLocaleString();
console.log(d, typeof(d));

let e=3*"Hello"
console.log(e);

console.log(isNaN(e));
console.log(isFinite(Infinity));

let f=+"21";
console.log(f, typeof(f));