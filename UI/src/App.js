
import './App.css';
 import { Route, Routes } from 'react-router-dom';
import Header from './Content/Header component/Header';
// import Carousel from './Content/carousel/Carousel'
import Content from './Content/Content  component/Content';
 import About from './Content/About  component/About';
 import Contact from './Content/Contact component/Contact';
 import Service from './Content/Service component/Service';
import Ragister from './Content/Ragister  component/Ragister';
 import Login from './Content/Login component/Login';
 import Logout from './Content/Logout component/Logout';
import Footer from './Content/Footer component/Footer';
import Adminhome from './Content/Adminhome component/adminhome';
import Userhome from './Content/Userhome component/userhome';
import Manageusers from './Content/Manageusers component/Manageusers';
import CPuser from './Content/cpuser component/cpuser';
import CPadmin from './Content/cpadmin component/cpadmin';
import EPuser from './Content/epuser component/epuser';
import Addcatagory from './Content/Addcatagory component/Addcatagory';
import EPadmin from './Content/epadmin component/epadmin';
import Addsubcatagory from './Content/Addsubcatagory component/Addsubcatagory';
import Viewcategory from './Content/viewcategory component/viewcategory';
import Viewsubcategory from './Content/viewsubcategory component/viewsubcategory';
import Addproperty from './Content/Addpropertycomponent/addproperty';
function App() {
  return (<>
    <div class="container-xxl bg-white p-0">

      <Header/>
      {/* <Carousel/> */}
      <Routes>
        <Route path='' element={<Content/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/register' element={<Ragister/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/admin' element={<Adminhome/>}></Route>
        <Route path='/manageuser' element={<Manageusers/>}></Route>
        <Route path='/user' element={<Userhome/>}></Route>
        <Route path='/cpuser' element={<CPuser/>}></Route>
        <Route path='/epuser' element={<EPuser/>}></Route>
        <Route path='/epadmin' element={<EPadmin/>}></Route>
        <Route path='/cpadmin' element={<CPadmin/>}></Route>
        <Route path='/addcatagory' element={<Addcatagory/>}></Route>
        <Route path='/addsubcatagory' element={<Addsubcatagory/>}></Route>
        <Route path='/viewcategory' element={<Viewcategory/>}></Route>
        <Route path='/viewsubcategory/:catnm' element={<Viewsubcategory/>}></Route>
        <Route path='/addproperty' element={<Addproperty/>}></Route>
      </Routes>
    </div>



    <Footer />
  </>);
}

export default App;
