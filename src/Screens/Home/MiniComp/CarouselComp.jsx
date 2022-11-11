import React from 'react'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Color } from '../../../Color';

function CarouselComp() {
  return (
    <div style={{height:'50vh'}}>
      <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} dynamicHeight={true}>
        
        <div style={{ backgroundColor: Color.blue, width: '100%', height: '50vh', color: 'white' }}>

          hello 1
        </div>
        <div style={{ backgroundColor: Color.blue, width: '100%', height: '50vh', color: 'white' }}>

          hello 2
        </div>
        <div style={{ backgroundColor: Color.blue, width: '100%', height: '50vh', color: 'white' }}>

          hello 3
        </div>
        <div style={{ backgroundColor: Color.blue, width: '100%', height: '50vh', color: 'white' }}>

          hello 4
        </div>
        <div style={{ backgroundColor: Color.blue, width: '100%', height: '50vh', color: 'white' }}>

          hello 5
        </div>

      </Carousel>

    </div>
  )
}

export default CarouselComp