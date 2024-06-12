
import './Contact.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
function Contact() {
const [data , setData]=useState([]);

useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    console.log(res.data);
    setData(res.data);

}).catch((err)=>{
    console.log(err);
},[])


})
  return (<>
  {/* About Start */}
  <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">Property Finder</span>
                        </h1>
                        <h2>Contact page</h2>
                        {
data.map((row)=>(

    <div>{row.data}</div>
))

                        }
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

export default Contact;

