
import axios from 'axios';
import './Manageusers.css'
import { useState, useEffect } from 'react';
import { _userapiurl } from '../../api_url';
import { useNavigate } from 'react-router-dom';
function Manageusers() {
    const navigate= useNavigate();
    const [userdetail, setuserdetail] = useState([]);
    useEffect(() => {
        axios.get(_userapiurl + "fetch?role=user").then((response) => {
            setuserdetail(response.data)
        }).catch((err) => {
            console.log(err);
        });
    });
    const manageuserstatus=(_id,s)=>{
if(s=='verify')
{
    let updatedetail= {"condition_obj":{"_id":_id},"content_obj":{"status":1}}
 axios.patch(_userapiurl+"update",updatedetail).then((response)=>{
    navigate("/manageuser");
 });
}
else if (s=='block')
{
    let updatedetail= {"condition_obj":{"_id":_id},"content_obj":{"status":0}}
    axios.patch(_userapiurl+"update",updatedetail).then((response)=>{
       navigate("/manageuser");
    });
}
else
{
     let deletedetail= {"data":{"_id":_id}}
     axios.delete(_userapiurl+"delete",deletedetail).then((response)=>{
        navigate("/manageuser");
     }); 
}
    };
    return (<>
        {/* Manage user start*/}
        <div class="container-xxl ">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">User management </h6>
                        <h1 class="mb-4">view & <span class="text-primary text-uppercase">Manage Users </span>
                        </h1>
                        <table class="table table-bordered">
                            <tr>
                                <th>Userid</th>
                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Gender</th>
                                <th>info</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                            {
                            userdetail.map((row)=>(
                                <tr>
                                    <td>{row._id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.mobile}</td>
                                    <td>{row.address}</td>
                                    <td>{row.city}</td>
                                    <td>{row.gender}</td>
                                    <td>{row.info}</td>
                                    <td>
                                        {row.status == 1 && <font color='green'>Verified</font>}
                                        {row.status == 0 && <font color='red'>Blocked</font>}
                                    </td>
                                    <td>
                                        {row.status == 1 && <font onClick={()=>manageuserstatus(row._id,"block")}  color='blue'>changestatus</font>}
                                        {row.status == 0 && <font onClick={()=>manageuserstatus(row._id,"verify")}  color='blue'>changestatus</font>}
<br/>
                                        <font onClick={()=>manageuserstatus(row._id,"delete")}  color='orange'>delete</font>
                                    </td>
                                </tr>
 
                            ))
                            }
                        </table>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row g-3">
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src=""
                                style={{ "margin-top": "25%" }} />
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="" />
                        </div>
                        <div class="col-6 text-end">
                            <img class="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="" />
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Manage user End */}
    </>);
}

export default Manageusers;
