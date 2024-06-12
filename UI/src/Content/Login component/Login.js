
import './Login.css';
import {useState} from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
//redirection key =navigate
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate= useNavigate();
    const [output , setoutput]= useState();
    const [email , setemail]= useState();
    const [password , setpassword]= useState();

    const handelsubmit=()=>{
        if(email== undefined|| password==undefined)
        {
            
            setoutput("invalid user or verify your account");
        } 
        else
        {
        var userdetail= {"email":email,"password":password};
         axios.post(_userapiurl+"login",userdetail).then((res)=>{
          setoutput("user login successs");
          var users= res.data.userdetail;
        //   console.log(users);
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("_id",users._id);
        localStorage.setItem("name",users.name);
        localStorage.setItem("email",users.email);
        localStorage.setItem("mobile",users.mobile);
        localStorage.setItem("address",users.address);
        localStorage.setItem("city",users.city);
        localStorage.setItem("gender",users.gender);
        localStorage.setItem("info",users.info);
        localStorage.setItem("role",users.role);
        (users.role == "admin")?navigate("/admin"):navigate("/user"); 
         }).catch((err)=>{
            setoutput("invalid user or verify your account");
            setemail("");
            setpassword("");
         });
        }
      };
  return (<>
  {/* login start */}
  <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">Login page</h6>
                        <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">Property Finder</span>
                        </h1>
                        <h2>Login here</h2>
                        <font color="blue">{output}</font>
                        <form>
 
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control"value={email} onChange={e=>setemail(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control"value={password} onChange={e=>setpassword(e.target.value)}/>
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
    {/* About End */}
   </> );
}

export default Login;
