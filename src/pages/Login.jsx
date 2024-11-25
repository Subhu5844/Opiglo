import React from 'react';
import UserLogin from "../components/userDasboard/UserLogin"
import Footer from '../components/website/Footer';
import Navtab from '../components/website/Navtab';

const Login = () => {
  return (
    <div>
        <Navtab/>
        <UserLogin/>
        <Footer/>
    </div>
  )
}

export default Login
