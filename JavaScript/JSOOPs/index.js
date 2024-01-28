// let obj = { name: "rahul", work: "Frontend Developer" }
// console.log(obj)

// let rabbit=()=>{
//     console.log("Jumping")
// }

// let animal=()=>{
//     console.log("Eats the food")
// }

// rabbit.__proto__=animal;
// rabbit ki property animals m ay jygi 

class Animal {
    constructor(name) {
        this.name = name;
        console.log(name)
        console.log("I am constructor")
    }
    eat = () => {
        console.log("Kha rha hu")
    }
    jump = () => {
        console.log("Kood rha hu ")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Inheritance Access")
    }
    dhadta = () => {
        console.log("Sher दहाड़ना ha")
    }

    eat=()=>{
        console.log("Not Eat")
    }
}
let a1 = new Animal("bunny");
console.log(a1)
console.log(a1.eat())
console.log(a1.jump())

let a = new Lion("Bunny1");
console.log(a)
console.log(a.dhadta())
console.log(a.eat())


// instanceof return the true and false value 
console.log(a instanceof Lion)