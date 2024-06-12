
import './viewcategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../../api_url';
import {Link} from 'react-router-dom'
function Viewcategory() {
    const [clist, setcatlist] = useState([]);
    useEffect(() => {
        axios.get(_categoryapiurl + "fetch").then((response) => {
            setcatlist(response.data);
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
                        <h6 class="section-title text-start text-primary text-uppercase">View Category</h6>
                        <h1 class="mb-4">category <span class="text-primary text-uppercase">List &gt;&gt;</span>
                        </h1>
                        <center>
                            <div id="category_main">
                                {
                                    clist.map((row) => (
                                        <Link to = {`/viewsubcategory/${row.catnm}`}>
                                            <div class="category_part">
                                                <img src={`assets/uploads/caticon/${row.caticonnm}`} height="100" width="150" />
                                                <br />
                                                <b>{row.catnm}</b>
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

export default Viewcategory;
