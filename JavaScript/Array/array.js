let arr = [10, 20, 30, 40, 50];
console.log(arr)
console.log(arr.length)
arr.push(60)
console.log(arr)
console.log(arr[0])
arr[0] = 192;
console.log(arr)

console.log(typeof arr)
console.log(arr.toString())
console.log(arr.join(" and "))


let a=[10,20,30,40,50];
console.log(a)
a.push("Rahul")
// a.pop();
console.log(a)
console.log(a.length)
console.log(a.shift())
console.log(a.unshift("jack"))
console.log(a)

let a1=[10,20];
let b1=[30,40];
let c1=[50,60];
console.log(a1.concat(b1,c1));

let newarr=[1,2,3,4,5];
let result=newarr.splice(1,3);
console.log(result)
