import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesList from './components/ServicesList';
import ContactUs from './components/ContactUs';
import Map from './components/Map';
import ComingSoon from './components/ComingSoon';


function App() {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesList />
      <Map />
      <ComingSoon />
      <ContactUs />
   
    </div>
    
  );
}

export default App;


