import express from 'express';
import fileUpload from 'express-fileupload';
import url from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import cors  from 'cors';
var app= express();
import userrouter from './route/userroutes.js';
import catrouter from "./route/cat_router.js";
import subcatrouter from "./route/subcat_router.js"
//import cors resolve cross origin problem;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//to extract file data from request
app.use(fileUpload()); 
app.use("/user",userrouter);
app.use("/category",catrouter);
app.use("/subcategory",subcatrouter);
app.listen(3004);
console.log("success at 3004");

