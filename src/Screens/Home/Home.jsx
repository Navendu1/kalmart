import React from 'react'
import Hader from '../../MiniComp/Hader'
import Carousel from './MiniComp/CarouselComp'
import Categories from './MiniComp/Categories'
import PopulerProductComp from './MiniComp/Products/PopulerProductComp'

function Home() {
    return (
        <div>
            <Hader />
            <Categories/>
            <Carousel/>
            <PopulerProductComp/>

        </div>
    )
}

export default Home