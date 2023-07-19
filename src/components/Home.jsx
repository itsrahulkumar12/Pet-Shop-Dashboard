import React from 'react'
import Navbar from './Navbar';
// import Slider from './Slider';
import ServiceCard from './ServiceCard';

import healthcare from '../assets/healthcare.jpg'
import grooming from '../assets/gromming.jpg'
import litters from '../assets/litters.jpg'
import dogfood from '../assets/dog-food.webp'
import catfood from '../assets/cat-food.webp'
import catfood1 from '../assets/cat-food1.webp'
import catfood2 from '../assets/cat-food2.webp'
import catfood3 from '../assets/cat-food3.webp'
import catfood4 from '../assets/cat-food4.webp'
import catfood5 from '../assets/cat-food5.webp'
import catfood6 from '../assets/cat-food6.webp'
import Footer from './Footer';




const Home = () => {

  

  return (
    <div className='home-page-container'>
    <div className="home-header">
      <Navbar />
      
    </div>
    {/* <div style={{marginTop:20}}><Slider /></div> */}
    <div className='dog-food'>
          <img src={dogfood} alt="" />
      </div>
    <section className='vet-services'>
      <div className='vet-services-heading'>
        <h3>Veterinary Services</h3>
        <div className='line'></div>
      </div>
      <div className='service-cards'>
        <ServiceCard image={healthcare} service={'Health Care'}  />
        <ServiceCard image={grooming} service={'Grooming'} />
        <ServiceCard image={litters} service={'Litters & Trays'} />
        <ServiceCard image={litters} service={'Litters & Trays'} />
        <ServiceCard image={healthcare} service={'Health Care'}  />
      </div>
    </section>
    <section className='vet-services products'>
      <div className='vet-services-heading products-heading'>
        <h3>Other Products</h3>
        <div className='line'></div>
      </div>
      <div className='dog-food'>
          <img src={catfood} alt="" />
      </div>
      <div className='cat-foods'>
        <img src={catfood1} alt="" width={150} height={200} />
        <img src={catfood2} alt="" width={150} height={200} />
        <img src={catfood3} alt="" width={150} height={200} />
        <img src={catfood4} alt="" width={150} height={200} />
        <img src={catfood5} alt="" width={150} height={200} />
        <img src={catfood6} alt="" width={150} height={200} />
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default Home