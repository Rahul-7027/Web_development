"use server"
import fs from "fs/promises"
export const handleSubmit = async (e) => {
    console.log(e.get("name"))
    let a = await fs.writeFile("rahul.txt", `My name is ${e.get("name")}`)
    console.log(111, a)
}