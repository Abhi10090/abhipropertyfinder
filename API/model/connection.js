import mongoose from "mongoose";
const url= "mongodb://localhost:27017/testdb";
mongoose.connect(url);
console.log("succesfully connected with mongodb database");