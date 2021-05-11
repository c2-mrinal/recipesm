import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import './allContent.css'

export default function Explore() {
    return (
        <div style={{backgroundColor:' LightPink', width:'100%', height:'100%'}} >
             <h3>Popular</h3>
            <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} loop={true} pagination={{"clickable": true}} className="mySwiper">
            <SwiperSlide>
                <div className='popularBox' style={{backgroundImage:"url(" +"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350"+")" }} >

                <div className="dishNameBorder">
                    <h3>Dish Name</h3></div>
                <span className="dishDescription">Description</span>
                </div>
            </SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
        </div>
    )
}
