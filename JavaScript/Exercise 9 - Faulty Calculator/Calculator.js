let a=parseInt(prompt("Enter Your First Number"))
let b=parseInt(prompt("Enter your Second Number"))

let addition = a - b;
let substraction = a / b;
let multiply = a + b;
let divide = a ** b;

let Random = Math.random();
if (Random < 0.1) {
    console.log("The sum of your two numbers is " + substraction);
    console.log("The subtraction of your two numbers is " + division);
    console.log("The multiplication of your two numbers is " + addition);
    console.log("The divison of your two numbers is " + multiplication);
}
else{
    console.log("The sum of your two numbers is " + addition);
    console.log("The subtraction of your two numbers is " + substraction);
    console.log("The multiplication of your two numbers is " + multiply);
    console.log("The divison of your two numbers is " + divide);
}