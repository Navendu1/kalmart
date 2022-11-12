import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Color } from '../../../Color';

function CarouselComp({ image1, image2, image3 }) {
  return (
    <div style={{ height: '50vh' }}>
      <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} dynamicHeight={true} showThumbs={false}>

        <img style={{
          width: '100%',
          height: '50vh', color: 'white', objectFit: 'contain',
        }} src={image1} alt='loading' />




        <img style={{ width: '100vw', height: '50vh', color: 'white', objectFit: 'contain' }} src={image2} alt='loading' />

        <img style={{ width: '100vw', height: '50vh', color: 'white', objectFit: 'contain' }} src={image3} alt='loading' />




      </Carousel>

    </div>
  )
}

export default CarouselComp