import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from '../../../assest/brands/one.jpg'
import two from '../../../assest/brands/two.jpg'

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;