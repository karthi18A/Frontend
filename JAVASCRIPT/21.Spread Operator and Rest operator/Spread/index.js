let a = [1,2,3]
let b = [4,5,6]

let c = a.concat(b)
console.log(c);

let d = [...a,...b]
console.log(d);

let e = [...b]
console.log(e);

let emp = {
    eId:101,
    ePlace:"Dubai"
}

let emp2 = {
    eName:"karthik",
    eDesig:"Billionere"
}

let f = {...emp,...emp2}
console.log(f);

let g = {...emp}
console.log(g);