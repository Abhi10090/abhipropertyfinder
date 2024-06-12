import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Auth from '../Auth component/auth';

function Header() {
    const [headercontent, setheadercontent] = useState();
    useEffect(() => {
        if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == 'admin')
            setheadercontent(<>
                {/* Header Start */}
                <div class="container-fluid bg-dark px-0">
                    <div class="row gx-0">
                        <div class="col-lg-3 bg-dark d-none d-lg-block">
                            <a href=""
                                class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <a href="" class="">
                                    <h2 class="m-0 text-primary text-uppercase"><span style={{ "color": "white" }}>Property</span>Finder</h2>
                                </a>
                                <h1 class="m-0 text-primary text-uppercase"></h1>
                            </a>
                        </div>
                        <div class="col-lg-9">
                            <div class="row gx-0 bg-white d-none d-lg-flex">
                                <div class="col-lg-7 px-5 text-start">
                                    <div class="h-100 d-inline-flex align-items-center py-2 me-4">

                                        <p class="mb-0">Welcome to</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center py-2">

                                        {/* <p class="mb-0">Admin page</p> */}
                                        <span>{localStorage.getItem("email")}</span>
                                    </div>
                                </div>
                                <div class="col-lg-5 px-5 text-end">
                                    {/* <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div> */}
                                </div>
                            </div>
                            <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="" class="navbar-brand d-block d-lg-none">
                                    <h1 class="m-0 text-primary text-uppercase">PropertyFinder</h1>
                                </a>
                                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div class="navbar-nav mr-auto py-0">
                                        {/*  */}
                                        {/* <a><Link to="/about" class="nav-item nav-link active">About</Link></a> */}
                                        {/* <a><Link to="/contact" class="nav-item nav-link active">Contact</Link></a> */}
                                        {/* <a><Link to="/service"  class="nav-item nav-link active">Service</Link></a> */}
                                        {/* <a><Link to="/login"  class="nav-item nav-link active">logout</Link></a> */}
                                        <span><a><Link to="/admin" class="nav-item nav-link active">Admin Home</Link></a></span>
                                        <span><a><Link to="/manageuser" class="nav-item nav-link ">Manage User</Link></a></span>
                                    </div>
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            setting
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                           
                                            <li><a class="dropdown-item" ><Link to ="/cpadmin"> Change Password</Link></a></li>
                                            <li><a class="dropdown-item" ><Link to = "/epadmin">Edit Profile</Link></a></li>
                                        </ul>

                                    </div>
                                    &nbsp;&nbsp;
                                    <div class="dropdown">
                                        <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            Managecategory
                                        </a>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                           
                                            <li><a class="dropdown-item" ><Link to ="/addcatagory"> Add catagory </Link></a></li>
                                            <li><a class="dropdown-item" ><Link to = "/addsubcatagory">Add SubCatagory</Link></a></li>
                                        </ul>
                                    </div>
                                        <span><a><Link to="/addproperty" class="nav-item nav-link ">Add Property</Link></a></span>
                                    <a><Link to="/logout" class="btn btn-primary rounded-0 py-4 px-md-5  d-lg-block" >Logout<i class="fa fa-arrow-right ms-3"></i></Link></a>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </>);
        else if (localStorage.getItem('token') != undefined && localStorage.getItem('role') == 'user')
            setheadercontent(<>{/* Header Start */}
                <div class="container-fluid bg-dark px-0">
                    <div class="row gx-0">
                        <div class="col-lg-3 bg-dark d-none d-lg-block">
                            <a href=""
                                class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <a href="" class="">
                                    <h2 class="m-0 text-primary text-uppercase"><span style={{ "color": "white" }}>Property</span>Finder</h2>
                                </a>
                                <h1 class="m-0 text-primary text-uppercase"></h1>
                            </a>
                        </div>
                        <div class="col-lg-9">
                            <div class="row gx-0 bg-white d-none d-lg-flex">
                                <div class="col-lg-7 px-5 text-start">
                                    <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                        {/* <i class="fa fa-envelope text-primary me-2"></i> */}
                                        <p class="mb-0">welcome to</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center py-2">

                                        <span>{localStorage.getItem("email")}</span>
                                    </div>
                                </div>
                                <div class="col-lg-5 px-5 text-end">
                                    {/* <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div> */}
                                </div>
                            </div>
                            <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="" class="navbar-brand d-block d-lg-none">
                                    <h1 class="m-0 text-primary text-uppercase">PropertyFinder</h1>
                                </a>
                                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div class="navbar-nav mr-auto py-0">
                                        
                                        {/* <a><Link to="" class="nav-item nav-link active">Home</Link></a> */}
                                <a><Link to="/user" class="nav-item nav-link active">UserHome</Link></a>
                                    <a><Link to="/viewcategory" class="nav-item nav-link active">property</Link></a>
                                {/* <a><Link to="/service"  class="nav-item nav-link active">Service</Link></a>  */}
                                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Setting
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                    <li><a class="dropdown-item"><Link to="/cpuser">Change Password</Link></a></li>
                                                    <li><a class="dropdown-item" ><Link to="/epuser">Edit Profile</Link></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>



                                    <a><Link to="/logout" class="btn btn-primary rounded-0 py-4 px-md-5  d-lg-block" >Logout<i class="fa fa-arrow-right ms-3"></i></Link></a>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Header End */}</>);
        else
            setheadercontent(<>
                {/* Header Start */}
                <div class="container-fluid bg-dark px-0">
                    <div class="row gx-0">
                        <div class="col-lg-3 bg-dark d-none d-lg-block">
                            <a href=""
                                class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                                <a href="" class="">
                                    <h2 class="m-0 text-primary text-uppercase"><span style={{ "color": "white" }}>Property</span>Finder</h2>
                                </a>
                                <h1 class="m-0 text-primary text-uppercase"></h1>
                            </a>
                        </div>
                        <div class="col-lg-9">
                            <div class="row gx-0 bg-white d-none d-lg-flex">
                                <div class="col-lg-7 px-5 text-start">
                                    <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                        <i class="fa fa-envelope text-primary me-2"></i>
                                        <p class="mb-0">info@example.com</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center py-2">
                                        <i class="fa fa-phone-alt text-primary me-2"></i>
                                        <p class="mb-0">+012 345 6789</p>
                                    </div>
                                </div>
                                <div class="col-lg-5 px-5 text-end">
                                    {/* <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div> */}
                                </div>
                            </div>
                            <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                                <a href="" class="navbar-brand d-block d-lg-none">
                                    <h1 class="m-0 text-primary text-uppercase">PropertyFinder</h1>
                                </a>
                                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div class="navbar-nav mr-auto py-0">
                                        {/*  */}
                                        <a><Link to="" class="nav-item nav-link active">Home</Link></a>
                                        <a><Link to="/about" class="nav-item nav-link active">About</Link></a>
                                        <a><Link to="/contact" class="nav-item nav-link active">Contact</Link></a>
                                        <a><Link to="/service" class="nav-item nav-link active">Service</Link></a>
                                        <a><Link to="/register" class="nav-item nav-link active">Register</Link></a>
                                    </div>
                                    <a><Link to="/login" class="btn btn-primary rounded-0  py-4 px-md-5 d-lg-block " >Login<i class="fa fa-arrow-right ms-3"></i></Link></a>
                                    {/* rounded-0 py-4 px-md-5 d-none d-lg-block */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </>);
    });
    return (<>
        <Auth />
        {headercontent}


    </>);
}

export default Header;
