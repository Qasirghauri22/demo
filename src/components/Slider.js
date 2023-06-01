import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Client1 from "../assets/img/div.elementor-brand-item-2.svg"
import Client2 from "../assets/img/div.elementor-brand-item-4.svg"
import Client3 from "../assets/img/div.elementor-brand-item-5.svg"
import Client4 from "../assets/img/div.elementor-brand-item-1.svg"
import Client5 from "../assets/img/div.elementor-brand-item-3.svg"



import "swiper/swiper.min.css";
SwiperCore.use([Autoplay]);
function HomeTwoSonsor() {
  const sponsorSlide = {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };
  return (
    <>
      <div className=" mt-5 container-fluid ">
        <div className="container mt-5">
          <div className="row mb-5 ">
          <div className="col-xl-6 col-lg-8 mx-auto mb-3 text-center mb-5">
                        <h3 className="our-client">our partners.</h3>
                        <hr className="our-client-hr" />
                    </div>
            <Swiper {...sponsorSlide} className="swiper sponsor-slider-dark mt-4">
              <div className="swiper-wrapper">
               
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                  <div className="row g-0 align-items-center">
                      <div className="col-md-4">  
                
                    </div>
                    <div className="col-md-8 ">
                    <img src={Client2}/>

                    </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                  <div className="row g-0 align-items-center">
                      <div className="col-md-4">  
                     </div>
                    <div className="col-md-8 ">
                        <img src={Client3}/>
                    {/* <h5 className="client_name">Mercedes-Benz <br/></h5>
                      <span className="client_name_price">from $60k</span> */}
                    </div>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                  <div className="row g-0 align-items-center">
                      <div className="col-md-4">  
                     </div>
                    <div className="col-md-5">
                    <img src={Client4}/>

                    </div>
                    </div>
                  </Link>
                </SwiperSlide>


                <SwiperSlide className="swiper-slide">
                  <Link to={"#"} className="sponsor-item">
                  <div className="row g-0 align-items-center">
                      <div className="col-md-4">  
                    </div>
                    <div className="col-md-8 ">
                    <img src={Client5}/>

                    </div>
                    </div>
                  </Link>
                </SwiperSlide>



              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTwoSonsor;
