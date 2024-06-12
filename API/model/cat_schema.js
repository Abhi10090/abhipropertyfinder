import mongoose  from "mongoose";
import uniquevalidator from 'mongoose-unique-validator';
var catschema=mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"catnm is required"],
        lowercase:true,
        unique:true,
        trim:true
    },
    caticonnm:{
        type:String,
        required:[true,"caticonnm is required"],
        trim:true
    },
})
catschema. plugin(uniquevalidator);
var catschemamodel=mongoose.model("category",catschema);
export default catschemamodel
