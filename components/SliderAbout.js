import React from 'react';
import Slider from 'react-slick';

export class SliderAbout extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyload: true,
      fade: true,
      swipe: false
    };
    return (
      <div className="sliderMe">
        <Slider {...settings}>
          <div><img src="../static/images/tyo-7.jpg" alt="tyo-slider-1"/></div>
          <div><img src="../static/images/tyo-9.jpg" alt="tyo-slider-2"/></div>
          <div><img src="../static/images/tyo-10.jpg" alt="tyo-slider-3"/></div>
          <div><img src="../static/images/tyo-12.jpg" alt="tyo-slider-4"/></div>
          <div><img src="../static/images/tyo-13.jpg" alt="tyo-slider-5"/></div>
        </Slider>
      </div>
    );
  }
}