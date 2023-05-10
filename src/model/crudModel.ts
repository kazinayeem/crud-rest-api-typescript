import mongoose, { mongo } from "mongoose";


const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    body : {
        type : String,
        require : true
    },
    isCompleted : {
        type : Boolean,
        require : true
    }
},{timestamps : true})


const todoModel = mongoose.model("todo" , todoSchema);

export default todoModel;