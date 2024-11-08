import {Schema,model} from "mongoose";

let collection = 'users'
let schema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    photo:{type:String,required:true},
    role:{type:Number,required:true},
    auto:{type: Schema.Types.ObjectId, ref:'autos'},
    online:{type: Boolean}
},{
    timestamps:true
})

let User = model(collection,schema)
export default User