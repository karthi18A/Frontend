let a = [1,2,3,4,5]
let b = a.map((v,i)=>v*5)
console.log(b);


Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i<this.length;i++){
        result.push(callback(this[i],i))
    }
    return result
}

let c = a.myMap((v,i)=>v*4)
console.log(c);