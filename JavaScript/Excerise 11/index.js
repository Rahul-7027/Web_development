let number = 7;
const myfun=(number)=>{
    // make an array 
    let arr=Array.from(Array(number+1).keys())
    console.log(arr)
    let c=arr.slice(1,).reduce((a,b)=>{return a*b})
    return c;
}

console.log(myfun(number))
// let number1=7;
// const myfunction = (number1) => {
//     let fac = 1;
//     for (let index = 1; index <= number1; index++) {
//         fac = fac * index
//     }
//     return fac;
// }
// const result1=myfunction(number1);
// console.log(result1)