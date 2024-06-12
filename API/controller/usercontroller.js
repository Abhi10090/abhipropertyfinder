// import bodyParser, { json } from 'body-parser';
import '../model/connection.js';
import userschemamodel from '../model/usermodel.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
// import bodyParser from 'body-parser';
// import { json } from 'body-parser';
export var save = async (req, res, next) => {
    var userdetail = req.body;
    var userlist = await userschemamodel.find();
    var l = userlist.length;
    var _id=l==0?1:userlist[l-1]._id+1;
    userdetail = { ...userdetail, "_id": _id, "status": 0, "role": "user", "info": Date() };
    try {
        var user = await userschemamodel.create(userdetail);
        res.status(201).json({ "status": true })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "status": false });
    }
}

export var login = async (req, res, next) => {
    var userdetail = req.body;
    userdetail = { ...userdetail, "status": 1 };
    var userlist = await userschemamodel.find(userdetail)
    console.log(userlist);
    var l = userlist.length;
    if (l != 0) {
        let payload = { "subject": userlist[0].email }
        let key = rs.generate();
        let token = jwt.sign(payload, key);
        return res.status(201).json({ "token": token, "userdetail": userlist[0] });
    }
    else
        return res.status(500).json({ "status": false })


}
export var fetch=async(req,res,next)=>{
    var condition_object= url.parse(req.url,true).query;
    var userlist=await userschemamodel.find(condition_object);
    var l= userlist.length;
    if(l!=0)
    {
        res.status(201).json(userlist);
    }
    else
    res.status(500).json({"status":false}); 
}
export var updateuser= async(req,res,next)=>{
    var condition_obj= await userschemamodel.findOne(req.body.condition_obj);
    // console.log(condition_obj)
    if(condition_obj){
        var result = await userschemamodel.updateOne(req.body.condition_obj,{$set:req.body.content_obj});
        if(result){
            res.status(201).json({"status":true});

        }else

        res.status(500).json({"status":"server error"});
    }
    else
    res.status(404).json({"status":"record not found"});
}
 

 export var deleteuser=async(req,res,next)=>{
    var condition_object=req.body;
    var user=await userschemamodel.find(condition_object);
    if(user.length!=0){
        let result=await userschemamodel.deleteMany(condition_object);
        if(result){
            res.status(201).json({"status":"sucess"});
        }
        else
        res.status(500).json({"status":false});
    }
    else
    res.status(404).json({error:"resource not found"});

 }