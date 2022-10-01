import React from 'react'

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero';
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import SelectsImg from './components/selectsImg/SelectsImg';
import Footer from './components/footer/Footer';
import ImgCarousel from './components/carousel/Carousel';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <ImgCarousel />
      <Footer />
     
    </div>
  );
}

export default App;