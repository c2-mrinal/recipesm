import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import './allContent.css'

export default function Explore() {
    const [popular] = useState([1,2,3,4,5,6,7,8,9,10,11])
    return (

        <div style={{backgroundColor:' ', width:'100%', height:'100%'}} >
            <div style={{padding:'50 auto', textAlign:'center'}}>
             <h1 >Popular</h1>
             </div>
            <Swiper slidesPerView={3} spaceBetween={70} freeMode={true} loop={false} pagination={{"clickable": true}} className="mySwiper">
          { popular.map(p =>  {
               return(
                <SwiperSlide>
                <div class="card" style={{backgroundImage:"url(" +"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=350"+")" }}>
                    <div class="content">
                        <h2 class="title">Dish Name</h2>
                        <p class="copy">Coffee and its arauma </p><button class="btn">View Recipe</button>
                    </div>
                </div>
            </SwiperSlide>
               )
           })}
         </Swiper>
  
        

        </div>
    )
}
