
import './About.css';
import Carousel from '../carousel/Carousel';

import axios from 'axios';
import { useState , useEffect } from 'react';


function About() {

    const [jsondata , setcomment]= useState([]);
    useEffect(()=>{
        var apiurl= "https://jsonplaceholder.typicode.com/comments";
        axios.get(apiurl).then((response)=>{
            setcomment(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    })
  return (<>
  {/* About Start */}
  <Carousel/>
  <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <h6 class="section-title text-start text-primary text-uppercase">About Us</h6>
                        <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">Property Finder</span> </h1>
                        <h2>api handeling</h2>
                        {/* <h2>counte: {count}</h2> */}
                    <table>
                        <tr>
                            <th>postid</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                        </tr>
                        {  
                         jsondata.map((row)=>(
                        <tr>
                            <td>{row.postId}</td>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.body}</td>
                        </tr>
                        ))
                        }
                    </table>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                            diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                            dolore erat amet</p>
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

export default About;
