const fs=require('fs')
console.log(fs)

console.log("Creating a new File")
// const result=fs.writeFileSync("rahulbhati.txt","Rahul is a good Boy");

let result=fs.writeFile("rahul.txt","Rahul is good boy",()=>{
    console.log("Happy Boy")
    fs.readFile("rahul.txt",(error,data)=>{
        if(data){
            console.log(data.toString())
        }
        else{
            console.log(error)
        }
    })
})
console.log(result)
console.log("ending")

fs.appendFile('rahul.txt'," rahulbhati mst boy h ",(data,error)=>{
    console.log(data)
})