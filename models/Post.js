import {Schema,model} from "mongoose";

let collection = 'posts'
let schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Relación referenciada
},{
    timestamps:true
})

let Post = model(collection,schema)
export default Post