
import './Ragister.css';
import {useState} from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api_url';
function Ragister() {
    const [output , setoutput]= useState();
    const [name , setname]= useState();
    const [email , setemail]= useState();
    const [password , setpassword]= useState();
    const [mobile , setmobile]= useState();
    const [address , setaddress]= useState();
    const [city , setcity]= useState();
    const [ gender, setgender]= useState();

    const handelsubmit=()=>{
      var userdetail= {"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender };
       axios.post(_userapiurl+"save",userdetail).then((res)=>{
        setoutput("user registered successs");
        setname("");
        setemail("");
        setpassword("");
        setmobile("");
        setaddress("");

       }).catch((err)=>{
        console.log(err);
       });
    };
  return (<>
 {/* About Start */}
 <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 ali gn-items-center">
                    <div class="col-lg-6">
                        <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">Property Finder</span>
                        <span> Register page</span>
                        </h1>
                        <h6 class="section-title text-start text-primary text-uppercase">Register Yourself</h6>
            <font color="blue">{output}</font>            
 <form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="name" class="form-control" value={name} onChange={e=>setname(e.target.value)}/>
  </div>
  <br/>
  
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
  <div class="form-group">
    <label for="mobile">Mobile:</label>
    <input type="mobile" class="form-control"value={mobile} onChange={e=>setmobile(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea  class="form-control" rows="5" value={address} onChange={e=>setaddress(e.target.value)}></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="city">city:</label>
    <select  class="form-control" value={city} onChange={e=>setcity(e.target.value)}>
        <option>select city</option>
        <option>Bhopal</option>
        <option>Indore</option>
        <option>Ujaain</option>
        <option>Nalkheda</option>
    </select>
    <br/>
    <label for="gender">Gender : </label>&nbsp;
     Male<input type="radio" value ="male" name="gender" onChange={e=>setgender(e.target.value)}/>&nbsp;&nbsp;&nbsp;
   Female <input type="radio" value ="female" name="gender"  onChange={e=>setgender(e.target.value)}/>


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

export default Ragister;
