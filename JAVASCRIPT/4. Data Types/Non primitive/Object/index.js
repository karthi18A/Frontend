//Literal
let stu = {
    sName:"vasudev",
    sId:33,
    sPalce:"AndraPradesh"
}

stu.sPinCode = 518222

delete stu.sPinCode

console.log(stu);
console.log(stu.sName);
console.log(stu["sName"]);

console.table(stu)

//New keyword

let emp = new Object()
emp.eName = "sudesh"
emp.eId = 2345
emp.ePlace = "Mysore"
console.log(emp);

//Constructor Function

function movie(mName,mId){
    this.mName = mName
    this.mId = mId
}

let m1 =new movie("KGF",1234)
let m2 = new movie("RRR",456)
console.log(m1);
console.log(m2);