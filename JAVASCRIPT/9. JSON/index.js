let emp = [
    {
        eId:101,
        eName:"Karthik",
        eDesignation:"Project Manager"
    },
    {
        eId:102,
        eName:"Pavankalyan",
        eDesignation:"Engineering Manager"
    }
]
console.log(emp);
console.log(JSON.stringify(emp));
console.log(JSON.parse(JSON.stringify(emp)));