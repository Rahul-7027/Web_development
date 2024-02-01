import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/Todo.js";

const app = express();
const port = 3000;
let a=await mongoose.connect("mongodb://localhost:27017/todo")

app.get('/', (req, res) => {
    const todo1=new todo({title:"Hey this is title",desc:"This is description",isDone:false})
    todo1.save();
  res.send('Hello World!')
})

app.get('/a',async (req, res) => {
    let mytodo=await todo.findOne({})
    console.log(mytodo);
    res.json({title: mytodo.title, desc: mytodo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})