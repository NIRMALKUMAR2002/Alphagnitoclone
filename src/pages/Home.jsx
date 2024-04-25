import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Corrosal from "../components/Corrosal/Corrosal";
import Aboutus from "../components/Aboutus/Aboutus";
import Training from "../components/Training/Training";
import Mission from "../components/Mission/Mission";
import Services from "../components/Services/Services";
import Ourclients from "../components/Ourclients/Ourclients";
import Whatourclients from "../components/Whatourclients/Whatourclients";
import Contactus from "../components/Contactus/Contactus";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Corrosal/>
      <Aboutus/>
      <Training/>
      <Mission/>
      <Services/>
      <Ourclients/>
      <Whatourclients/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default Home
