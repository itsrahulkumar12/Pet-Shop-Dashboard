import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

const Slider = () => {
  return (

    <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
    <swiper-slide><img src={slide1} alt="slide1" height={150} style={{borderRadius:25}} /></swiper-slide>
    <swiper-slide><img src={slide1} alt="slide1" height={150} style={{borderRadius:25}} /></swiper-slide>
    <swiper-slide><img src={slide1} alt="slide1" height={150} style={{borderRadius:25}} /></swiper-slide>
    <swiper-slide><img src={slide1} alt="slide1" height={150} style={{borderRadius:25}} /></swiper-slide>
  
    
  </swiper-container>
    // <Swiper
    // spaceBetween={400}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
        
    //     navigation={true}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     className="mySwiper"
    // >
    //   <SwiperSlide>
    //     <img src={slide1} alt="slide1" height={150} style={{borderRadius:25}} />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={slide2} alt="slide2" height={150} style={{borderRadius:25}} />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <img src={slide3} alt="slide3" height={150} style={{borderRadius:25}} />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //   <img src={slide4} alt="slide4" height={150} style={{borderRadius:25}} />
    //   </SwiperSlide>
      
    // </Swiper>
  )
}

export default Slider