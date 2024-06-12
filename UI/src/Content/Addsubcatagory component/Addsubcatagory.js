
import './Addsubcatagory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {_categoryapiurl , _subcategoryapiurl} from '../../api_url';
function Addsubcatagory() {
    const [file, setfile] = useState();
    const [catname, setcatname] = useState();
    const [subcatname, setsubcatname] = useState();
    const [output, setoutput] = useState();
    const [clist , setcatlist]= useState([]);
   useEffect(()=>{
    axios.get(_categoryapiurl+"fetch").then((response)=>{
        setcatlist(response.data);
        
    }).catch((err)=>{
        console.log(err);
    });
   });
    const handlechange = (event) => {
        setfile(event.target.files[0]);
    }
    const handelsubmit =(event)=>{
        var formData = new FormData();
        formData.append('catnm', catname);
        formData.append('subcatnm', subcatname);
        formData.append('caticon', file);
        const config = {
            'content-type':'multipart/form-data'
        };
        axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
            setcatname("");
            setsubcatname("");
            setoutput("subcategory added successfully");
        });
    }

    return (<>
        {/* Addcatagory Start */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">

                        <h1 class="mb-4">Add Subcatagory <span class="text-primary text-uppercase">Here &gt;&gt;</span>
                            <font color="blue">{output}</font>
                            <form>
                                <div class="form-group">
                                    <label for="catnm"> catagory Name:</label>
                                    <select  class="form-control" value={catname} onChange={e => setcatname(e.target.value)} >
                                        <option>select category</option>
                                       {
                                        clist.map((row)=>(
                                            <option>{row.catnm}</option>
                                        ))
                                       }
                                    </select>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="subcatnm"> subcatagory Name:</label>
                                    <input type="text" class="form-control" value={subcatname} onChange={e => setsubcatname(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="file">subCatagory Icon:</label>
                                    <input type="file" class="form-control" onChange={handlechange} />
                                </div>
                                <br />
                                <button onClick={handelsubmit} type="button" class="btn btn-danger">Add Sub Catagory</button>
                            </form>
                        </h1>
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
        {/* About End */}
    </>);
}

export default Addsubcatagory;
