"use client";

import { Pagination } from 'swiper/modules'; // Import the pagination module
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../public/plugins/swiper/swiper-bundle';

const SwiperSlider = () => {
    return (
        <Swiper
          className="swiper auth-banner-carousel" // Keeping the existing class names for styling
          pagination={{ clickable: true }} // Enable pagination
          modules={[Pagination]} // Add the Pagination module
          loop={true} // Enable looping
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Number of slides visible at once
        >
          <SwiperSlide className="swiper-slide"> {/* Applying swiper-slide class */}
            <img
              width="667"
              height="557"
              className="mx-auto"
              src="images/login-carousel-img-1.png"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide"> {/* Applying swiper-slide class */}
            <img
              width="667"
              height="557"
              className="mx-auto"
              src="images/login-carousel-img-1.png"
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide"> {/* Applying swiper-slide class */}
            <img
              width="667"
              height="557"
              className="mx-auto"
              src="images/login-carousel-img-1.png"
              alt="Slide 3"
            />
          </SwiperSlide>
    
          {/* Pagination element */}
          <div className="pagination"></div>
        </Swiper>
      );
    };

export default SwiperSlider;
