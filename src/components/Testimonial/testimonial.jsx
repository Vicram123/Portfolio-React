import React from 'react'
import './testimonial.css'
import AVTR from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR,
    name: 'Jaarko Markus',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit culpa vitae et at odio aliquam minus quas perferendis debitis dicta consectetur explicabo quia fugit iusto aperiam facere dolor quo eos',
  },
   {
    avatar: AVTR2,
    name: 'Akebe Lionel',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit culpa vitae et at odio aliquam minus quas perferendis debitis dicta consectetur explicabo quia fugit iusto aperiam facere dolor quo eos',
  },
      {
    avatar: AVTR3,
    name: 'Markin Pirkka',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit culpa vitae et at odio aliquam minus quas perferendis debitis dicta consectetur explicabo quia fugit iusto aperiam facere dolor quo eos',
  },
        {
    avatar:AVTR4 ,
    name: 'Anuche O',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit culpa vitae et at odio aliquam minus quas perferendis debitis dicta consectetur explicabo quia fugit iusto aperiam facere dolor quo eos'
  }
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
         // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (

              <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
            <img src={avatar} alt='Avatar1' />
            </div>
            <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review }</small>
              </SwiperSlide>
              
            )
          
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial