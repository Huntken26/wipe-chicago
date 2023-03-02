import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesList from './components/ServicesList';
import ContactUs from './components/ContactUs';
import Map from './components/Map';


function App() {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <ServicesList />
      <Map />
      <ContactUs />
   
    </div>
    
  );
}

export default App;


