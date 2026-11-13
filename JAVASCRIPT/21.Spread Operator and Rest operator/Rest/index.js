let fruits = ["Apple","Banana","cherry","DragonFruit","Kiwi"]


let [a,b,...others] = fruits
console.log(a);
console.log(b);
console.log(others);


let stu = {
    sId:101,
    sName:"Karthik",
    sPlace:"banglore",
    sClass:"10th"
}

let {sId,sName,...otherss} = stu
console.log(sId);
console.log(sName);
console.log(otherss);