import React from 'react'
import Hader from '../../MiniComp/Hader'
import Carousel from './MiniComp/CarouselComp'
import Categories from './MiniComp/Categories'
import PopulerProductComp from './MiniComp/Products/PopulerProductComp'

function Home({data}) {
    
    return (
        <div>
            <Hader />
            <Categories props={data}/>
            <Carousel image1={data[0].image1} image2={data[0].image2} image3={data[0].image3}/>
            <PopulerProductComp data={data}/>

        </div>
    )
}

export default Home