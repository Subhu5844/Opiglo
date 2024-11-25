import React from 'react'
import Navbar from '../components/website/Navbar'
import Footer from '../components/website/Footer'
import LandingPage from '../components/website/Homepage/LandingPage'
import Welcome from '../components/website/Homepage/Welcome'
import Features from '../components/website/Homepage/Features'
// import Security from '../components/website/Homepage/Security'
import Factors from '../components/website/Homepage/Factors'
import Blogs from '../components/website/Homepage/Blogs'
import Reviews from '../components/website/Homepage/Reviews'
import Overseas from '../components/website/Homepage/Overseas'
import Flag from '../components/website/Homepage/Flag'

const Home = () => {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <Welcome/>
      <Reviews/>
      <Features/>
      <Factors/>
      {/* <Blogs/> */}
      <Overseas/>
      <Flag/>
      <Footer/>
    </div>
  )
}

export default Home
