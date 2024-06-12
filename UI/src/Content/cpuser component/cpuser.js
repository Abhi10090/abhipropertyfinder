import './cpuser.css';
import {useState} from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
//redirection key =navigate
import { useNavigate } from 'react-router-dom';

function CPuser(){
    const navigate= useNavigate();
    const [output , setoutput]= useState();
    const [opassword , setoldpassword]= useState();
    const [npassword , setnewpassword]= useState();
    const [cnpassword , setconfirmnewpassword]= useState();
    const handelsubmit=()=>{
        if(opassword == undefined|| npassword == undefined || cnpassword == undefined){

            setoutput("please fill all field ")
        }
        else if(npassword.length<5)
        {
            setoutput("length is must be greater then 5 digit ");
            
        }
        else
    
        {

     
        
            
            setoutput("invalid user or verify your account");
         
        
        
        var userdetail= {"email":localStorage.getItem("email"),"password":opassword};
         axios.post(_userapiurl+"login",userdetail).then((res)=>{
        if(npassword==cnpassword)
        {
            let updatedetail= {"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}}
            axios.patch(_userapiurl+"update",updatedetail).then((response)=>{
                alert ("password must be updated succesfully");
               navigate("/logout");
            });
        }
        else{
            setoutput("new and confirm new password is mismatch ");
            setnewpassword("");
            setconfirmnewpassword("");
        }
           
         }).catch((err)=>{
            setoutput("invalid old password");
            
            setoldpassword("");
         });
        }   
      };
    return(<>
    <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h1 class="mb-4">Change Password <span class="text-primary text-uppercase">Here</span>
                        </h1>
                        <font color="blue">{output}</font>
                        <form>
 
  
  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password" class="form-control"value={opassword} onChange={e=>setoldpassword(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="nppwd">New Password:</label>
    <input type="password" class="form-control"value={npassword} onChange={e=>setnewpassword(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password" class="form-control"value={cnpassword} onChange={e=>setconfirmnewpassword(e.target.value)}/>
  </div>
  <br/>
  
  <button onClick={handelsubmit} type="button" class="btn btn-danger">Submit</button>
</form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src=""
                                style={{"margin-top": "25%"}}/>
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src=""/>
                        </div>
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src=""/>
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default CPuser