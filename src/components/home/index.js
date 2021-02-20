import React from 'react';
import before from '../../utils/before.jpg';
import after from '../../utils/after.jpg';
import {
  defineCustomElements,
  applyPolyfills,
} from 'img-comparison-slider/loader';
import services from '../services/services.js';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

applyPolyfills().then(() => defineCustomElements(window));

const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    swipeToSlide: true,
    speed: 1500,
    autoplaySpeed: 1,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          speed: 500,
          dots: true,
        },
      },
    ],
  };

  const listItems = services.map((service) => (
    <div className="card-li" key={service.title}>
      <div className="flip-card-front-title">{service.title}</div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={service.image} alt="Avatar" />
          </div>
          <div className="flip-card-back circle">
            <span className="circle-content">
              {service.description.slice(0, 185) + '...'}
              <p>
                {' '}
                <Link
                  className="card-link"
                  to={
                    '/услуги/' +
                    service.title.toLocaleLowerCase().replaceAll(' ', '-')
                  }
                >
                  Виж още
                </Link>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="slider">
        <img-comparison-slider>
          <img className="img" slot="before" src={before} alt="" />
          <img className="img" slot="after" src={after} alt="" />
        </img-comparison-slider>
      </div>
      <div className="container">
        <h3>Услуги</h3>
        <Slider {...settings}>{listItems}</Slider>
      </div>
    </div>
  );
};

export default Home;
