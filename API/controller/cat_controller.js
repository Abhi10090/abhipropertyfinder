import '../model/connection.js';
import catschemamodel from '../model/cat_schema.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';

const __dirname= url.fileURLToPath(new URL('.',import.meta.url))

export var save=async(req,res,next)=>{
    var cdetail= req.body;
    var caticon = req.files.caticon
    var caticonnm=Date.now()+"-"+rs.generate()+"-"+caticon.name;
    var clist= await catschemamodel.find()
    var l=clist.length
    var _id=l==0?1:clist[l-1]._id+1;
    cdetail={...cdetail,"_id":_id, "caticonnm":caticonnm};

    try{
        var result = await catschemamodel.create(cdetail);
        // console.log(result)
       var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/caticon",caticonnm);
       caticon.mv(uploadpath);
        res.status(201).json({"status":true});
        
        
    }
    catch(err)
    {
        res.status(500).json({"status":false});
        
    }
}
export var fetch=async (req,res,next)=>{
    var cdetail=url.parse(req.url,true).query;
  var clist=await catschemamodel.find(cdetail);
  var l = clist.length
  if(l!=0){

    res.status(201).json(clist);
}else
res.status(500).json({"status":false});
}


export var updatecat=async(req,res,next)=>{
    var condition_obj=await catschemamodel.findOne(JSON.parse(req.body.condition_obj));
    if(condition_obj)
    {
        var result = await catschemamodel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.content_obj)});
        if(result){
            res.status(201).json({"status":"data is update"});
            
        }else
        res.status(500).json({"status":"false"});

    }else
    res.status(404).json({"status":"record not found"})
}
export var deletecat=async(req,res,next)=>{
    var cdetail=await catschemamodel.findOne(req.body);
    if(cdetail){
        var result= await catschemamodel.deleteOne(cdetail);
        res.status(201).json({"status":true});
    }else
    res.status(500).json({"status":false});
}