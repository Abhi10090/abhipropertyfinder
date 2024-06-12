
import './viewsubcategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../../api_url';
// import {Link} from 'react-router-dom'
import {useParams , Link} from 'react-router-dom'; 
function Viewsubcategory() {
    const params= useParams();
    const [sclist, setsubcatlist] = useState([]);
    useEffect(() => {
        axios.get(_subcategoryapiurl + "fetch?catnm"+params.catnm).then((response) => {
            setsubcatlist(response.data);
        }).catch((err) => {
            console.log(err);
        });
    });
  return (<>
 {/* About Start */}
 <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">View Sub Category</h6>
                        <h1 class="mb-4">Subcategory <span class="text-primary text-uppercase">List &gt;&gt;{params.catnm}</span>
                        </h1>

                        <center>
                            <div id="category_main">
                                {
                                    sclist.map((row) => (
                                        <Link to = {`/viewproduct/${row.subcatnm}`}>
                                            <div class="category_part">
                                                <img src={`../assets/uploads/subcaticon/${row.subcaticonnm}`} height="100" width="150" />
                                                <br />
                                                <b>{row.subcatnm}</b>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>
                        </center>
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

export default Viewsubcategory;
