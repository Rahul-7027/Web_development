import fs from "fs"

// fs.writeFile("newfile.txt", "Always Happy", () => {
    
// })

// fs.readFile("newfile.txt",(error,data)=>{
//     if(data){
//         console.log(data.toString())
//     }
//     else{
//         console.log(error)
//     }
// })

import path from "path"
// console.log(path)

let newpath="D:\\New Learning Full Stack Course\\Node JS\\WorkingFile"
console.log(path.extname(newpath))
console.log(path.dirname(newpath))
console.log(path.basename(newpath))

// console.log(path.join("D:\\","program/rahul.txt"))
