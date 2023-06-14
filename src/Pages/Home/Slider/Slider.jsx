import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Container from '../../Shared/Container/Container';

const Slider = () => {
  const [sliders, setSliders] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/slider')
      .then(res => res.json())
      .then(data => {
        setSliders(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <Container>
      <div className='mb-28 mt-20'>
        <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>Populer Sports</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            sliders.map(slider =>
              <SwiperSlide key={slider._id}>
                <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
                  <figure><img className='h-[250px] w-full' src={slider.picture} alt="" /></figure>
                  <div className="card-body">
                    <h2 className="text-center font-bold text-white text-2xl content-center">{slider.name}</h2>
                    <p className='text-slate-200'>{slider.text}</p>
                    <p className='text-center text-[#f7b501]'>Message</p>
                    <p>{slider.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            )}
        </Swiper>
      </div>
    </Container>
  );
};

export default Slider;

