let a = [1,2,3,4,5]
console.log(a);

let b = a.push(6,7,8)
console.log(a);

let c = a.pop()
console.log(a);

let d = a.unshift(0)
console.log(a);

let e = a.shift()
console.log(a);

let numbers = [100,200,300,400]

let f = numbers.map((value,index)=>console.log(value))

let g = numbers.map((value,index)=>value*2)
console.log(g);

let h = numbers.filter((value,index)=>value>200)
console.log(h);

let i = numbers.find((value,index)=>value>200)
console.log(i);

let j = numbers.reduce((prev,curr)=>prev+curr)
console.log(j);

// 9. sort

let numbers1 = [400, 100, 300, 200]

let k = numbers1.sort((a,b) => a-b)

console.log(k);


// 10. every

let numbers2 = [100, 200, 300, 400]

let l = numbers2.every((value,index) => value > 50)

console.log(l);


// 11. some

let numbers3 = [100, 200, 300, 400]

let m = numbers3.some((value,index) => value > 300)

console.log(m);


// 12. toString

let numbers4 = [100, 200, 300, 400]

let n = numbers4.toString()

console.log(n);


// 13. toSorted

let numbers5 = [400, 100, 300, 200]

let o = numbers5.toSorted((a,b) => a-b)

console.log(o);


// 14. forEach

let numbers6 = [100, 200, 300, 400]

numbers6.forEach((value,index) => console.log(value))


// 15. reverse

let numbers7 = [100, 200, 300, 400]

let p = numbers7.reverse()

console.log(p);


// 16. join

let numbers8 = [100, 200, 300, 400]

let q = numbers8.join()

console.log(q);