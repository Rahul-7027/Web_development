async function myfun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Funny function")
            resolve(2323)
        }, 1000);
    })
}


// let a = await myfun();
// let b = await myfun();
// console.log(a, b)

(async function main() {
    let a = await myfun();
    console.log(a)
    let b = await myfun();
    console.log(b)
})()

// console.log(main())  