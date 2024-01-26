let a = [1, 2, 3, 4, 5];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// for Each Loop 
// a.forEach(element => {
//     console.log(element)
// });


// for in Loop 
// let object = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(element,key)
//     }
// }
// for Of Loop 
// for (const iterator of a) {
//     console.log(iterator)
// }

a.map((data,index)=>{
    console.log(index,data)
})