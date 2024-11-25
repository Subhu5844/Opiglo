import React from 'react';
import ScrollToTop from '../components/website/ScrollToTop.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Platforms from '../pages/Platforms.jsx';
import About from '../pages/About.jsx';
import Service from '../pages/Service.jsx';
import Network from '../pages/Network.jsx';
import Contact from '../pages/Contact.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Pricing from '../pages/Pricing.jsx';
import Admin from '../pages/Admin.jsx';
import UserHome from "../pages/UserDashboardPages/UserHome.jsx";
import VehicleDetails from "../pages/UserDashboardPages/VehicleDetails.jsx";
import AddVehicles from "../pages/UserDashboardPages/AddVehicles.jsx";
import UserProfile from "../pages/UserDashboardPages/UserProfile.jsx";
import Roles from "../pages/UserDashboardPages/Roles.jsx";
import AddRoles from "../pages/UserDashboardPages/AddRoles.jsx";
import EditRole from "../pages/UserDashboardPages/EditRole.jsx";
import Payment from "../pages/UserDashboardPages/Payment.jsx";
import ChoosePaymentWay from "../pages/UserDashboardPages/ChoosePaymentWay.jsx";
import DriverDetails from '../pages/UserDashboardPages/DriverDetails.jsx';
import AddDriver from '../pages/UserDashboardPages/AddDrivers.jsx';
import OrderFuel from '../pages/UserDashboardPages/OrderFuel.jsx';
import OrderFuelPayment from '../pages/UserDashboardPages/OrderFuelPayment.jsx';


const AppRoutes = () => {
  return (
    <Router>
        <ScrollToTop/>
        <Routes >
          {/* wesite routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/platforms" element={<Platforms/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/product' element={<Service/>} />
          <Route path='/network' element={<Network/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/fuelprice' element={<Pricing/>} />
          <Route path='/admin' element={<Admin/>} />

          {/* user dashboard routes */}
          
          <Route path="/userdashboard" element={<UserHome />} />
          <Route path="/profiles" element={<UserProfile />} />
          <Route path="/payment" element={<Payment></Payment>} />
          <Route path="/choosepayment" element={<ChoosePaymentWay />} />
          <Route path="/vehicledetails" element={<VehicleDetails />} />
          <Route path="/add-vehicle" element={<AddVehicles />} />
          <Route path="/driverdetails" element={<DriverDetails />} />
          <Route path="/add-driver" element={<AddDriver />} />
          <Route path="/Roles" element={<Roles />} />
          <Route path="/AddRoles" element={<AddRoles />} />
          <Route path="/EditRole" element={<EditRole />} />
          <Route path="/OrderFuel" element={<OrderFuel />}>

          </Route>
          <Route path="/OrderFuel/Confirmation" element={<OrderFuelPayment/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes
