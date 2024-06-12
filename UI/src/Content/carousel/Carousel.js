
import './Carousel.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'; 

function Carousel() {
    const [Carouselcontent , setCarouselcontent] = useState();
useEffect (()=>{
    if(localStorage.getItem('token')!= undefined && localStorage.getItem('role')=='admin')
    setCarouselcontent(<></>);
    else if (localStorage.getItem('token')!= undefined && localStorage.getItem('role')=='user')
    setCarouselcontent(<></>);
    else
    setCarouselcontent(<>{/* Carousel Start */}
    <div class="container-fluid p-0 mb-5">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="assets/img/carousel-1.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width": "700px"}}>
                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Property
                                Finder</h6>
                            <h1 class="display-3 text-white mb-4 animated slideInDown">Welcome To Your Dream Home
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assets/img/carousel-2.jpg" alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"max-width": "700px"}}>
                            <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Property
                                Finder
    
                            </h6>
                            <h1 class="display-3 text-white mb-4 animated slideInDown">search for best property
                                options as your requirment</h1>
                            {/* <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Rooms</a> */}
                            {/* <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Room</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Carousel End */}
    </>);
    });
    return (<>
        {Carouselcontent}
            
    
        </>);
    }
export default Carousel;
