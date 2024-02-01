import mongoose from "mongoose";
const { Schema } = mongoose;
const todoSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    desc: String,
    isDone: Boolean,
  });

export const todo=mongoose.model("todo",todoSchema);