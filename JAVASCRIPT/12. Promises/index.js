let job = true; //false
let pro = new Promise((resolve, reject) => {
    if (job) {
        resolve("I got job")
    }
    else {
        reject("NO still not")
    }
})

pro.then((res) => console.log(res))
pro.catch((res) => console.log(res))
pro.finally(() => console.log("Result is...."))