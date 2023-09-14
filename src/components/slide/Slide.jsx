import React from 'react'
import './slide.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slide({children,slidesToShow,arrowsScroll}) {

  return (
    <div className="slide">
        <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} dots>
          {children}
        </Slider>

        

        </div>
    </div>
  )
}
