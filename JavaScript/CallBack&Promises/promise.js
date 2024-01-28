let prom1 = new Promise((resolve, reject) => {
    let random = Math.random();
    if (random < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("I am very happy")
            resolve('Rahul')
        }, 3000);
    }
})


let prom2 = new Promise((reject, resolve) => {
    let rand2 = Math.random();
    if (rand2 < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("I am Always Happy")
            resolve("Happy Boy")
        }, timeout);
    }
})


// let p = Promise.race([prom1, prom2])
// let p = Promise.all([prom1, prom2])
// let p = Promise.allSettled([prom1, prom2])
let p = Promise.any([prom1, prom2])



p.then((a) => {
    console.log(a)
}).catch((e) => {
    console.log(e)
}).finally((e) => {
    console.log("Good Boy and Happy")
})