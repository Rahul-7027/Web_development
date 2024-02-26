let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}
let obj2 = {
    1: "Engine",
    2: "Food",
    3: "Garments"
}
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hubs"
}

const ran1 = Math.floor((Math.random() * 3) + 1)
const ran2 = Math.floor((Math.random() * 3) + 1)
const ran3 = Math.floor((Math.random() * 3) + 1)

console.log(`${obj1[ran1]} , ${obj2[ran2]} , ${obj3[ran3]}`)