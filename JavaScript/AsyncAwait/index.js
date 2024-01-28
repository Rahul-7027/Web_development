// function myfun() {
//     return new Promise((reject, resolve) => {
//         setTimeout(() => {
//             resolve("Resolved Data")
//         }, 3000);
//     })
// }

// console.log('Hello World')
// console.log("I am Good Boy")

// let data = myfun();


// This is Callback function
// data.then((value) => {
//     console.log('Hello World')
//     console.log("I am Good Boy")
//     console.log(value)
// }).catch((err) => { console.log(err) })
// console.log(data)


// async Await 

// async function myfun() {
//     return new Promise((reject, resolve) => {
//         setTimeout(() => {
//             resolve(3434)
//         }, 3000);
//     })
// }

// const main = async () => {
//     console.log("Loading Modeules")
//     console.log("Do Something Else")
//     console.log("Load Data");

//     let data = await myfun();
//     console.log(data)
//     console.log("Process Data")
// }

async function myfun() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let newData=await x.json();
    console.log(newData)
}

const main = async () => {
    console.log("Loading Modeules")
    console.log("Do Something Else")
    console.log("Load Data");

    let data = await myfun();
    console.log(data)
    console.log("Process Data")
}

main();