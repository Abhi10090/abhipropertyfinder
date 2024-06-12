import mongoose  from "mongoose";
import uniquevalidator from 'mongoose-unique-validator';
var subcatschema=mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"catnm is required"],
        lowercase:true,
        trim:true
    },
    subcatnm:{
        type:String,
        required:[true,"subcatnm is required"],
        lowercase:true,
        unique:true,
        trim:true
    },
    subcaticonnm:{
        type:String,
        required:[true,"subcaticonnm is required"],
        trim:true
    },
})
subcatschema. plugin(uniquevalidator);
var subcatschemamodel=mongoose.model("subcategory",subcatschema);
export default subcatschemamodel;
