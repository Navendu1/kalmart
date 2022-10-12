import React from 'react'

import './productDetails.css'

import CarouselComp from '../Home/MiniComp/CarouselComp';
import { Color } from '../../Color';
import ProductCardComp from '../../MiniComp/ProductCardComp';
function ProductDetails() {
  return (
    <div>
      <CarouselComp />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <text className='product-name-details-page'>
          Product name goes here
        </text>

        <text className='product-price-details-page'>
          Price
        </text>

      </div>

      <div>
        <text>
          <h4>
            Product  Description
          </h4>
          What is Lorem Ipsum?
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </text>
      </div>



      <div>

        <div>
          <h4>
            simmiler products
          </h4>

          <div style={{display:'flex',overflowX:'auto',gap:'10px',}}>
            <ProductCardComp/>
            <ProductCardComp/>
            <ProductCardComp/>
            <ProductCardComp/>
            <ProductCardComp/>
            <ProductCardComp/>
            <ProductCardComp/>
            <ProductCardComp/>

          </div>
        </div>

        <button style={{
          backgroundColor: Color.BananaYellow, width: "100%", borderColor: Color.black, padding: '10px', marginTop: "10px", borderRadius: '10px', position: ' -webkit - sticky',
          position: "sticky",
          bottom: 0
        }}>
          <text style={{ fontSize: '25px', color: Color.black, fontWeight: '600' }}>
            Buy now

          </text>
        </button>
      </div>

    </div>
  )
}

export default ProductDetails