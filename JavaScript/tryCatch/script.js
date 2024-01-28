let a = parseInt(prompt("Enter Your First Number"))
let b = parseInt(prompt("Enter Your Second Number"))
let c = a + b;
console.log("The Sum of two number's is  " + c)

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

const main = () => {
    let x = 1;
    try {
        console.log(x)
        let result = 1 / 1;
        console.log("Division problem ", result)
        return true
    }
    catch (err) {
        console.log("Error aa gaya bhai")
        return false;
    }
    finally {
        console.log("Final Block Always Execute")
        console.log("files are being closed and db connection is being closed")
    }
}

let newData = main();
console.log(newData)

// finally block function m use krta h or return likhna ka baad m kuch vakue nhi milti h or isha hum kuch dekhna ho to finally block exceute krta h
// show this topic is most important for interview point of view 