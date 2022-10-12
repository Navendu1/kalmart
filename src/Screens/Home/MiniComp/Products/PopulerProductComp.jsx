import React from 'react'
import { Color } from '../../../../Color'
import ProductCardComp from '../../../../MiniComp/ProductCardComp'

import './product.css'

function PopulerProductComp() {

    return (
        <>
            {/* heading section */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 className="populerProductText">
                    Populer Products
                </h2>
                {/* on click to show all products */}
                <h4 style={{ color: Color.blue }}>
                    View All Products {'>'}
                </h4>
            </div>


            {/* .............show all populer products............ */}
            <div className='product-card-container'>
                {/* <div class="container">
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card one</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card two</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card Three</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>

                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card Four</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div> */}

             <ProductCardComp/>
             <ProductCardComp/>

                <div className='product-card'>
                    <img
                        className='product-image'
                        src='https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg'

                    />
                    <div>
                        <h4>product name here</h4>
                        <h6>$12.50</h6>
                    </div>
                </div>

                <div className='product-card'>
                    <img
                        className='product-image'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Vesta_sewing_machine_IMGP0718.jpg/800px-Vesta_sewing_machine_IMGP0718.jpg'

                    />
                    <div>
                        <h4>product name here</h4>
                        <h6>$12.50</h6>
                    </div>
                </div>

                <div className='product-card'>
                    <img
                        className='product-image'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Vesta_sewing_machine_IMGP0718.jpg/800px-Vesta_sewing_machine_IMGP0718.jpg'

                    />
                    <div>
                        <h4>product name here</h4>
                        <h6>$12.50</h6>
                    </div>
                </div>

                <div className='product-card'>
                    <img
                        className='product-image'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Vesta_sewing_machine_IMGP0718.jpg/800px-Vesta_sewing_machine_IMGP0718.jpg'

                    />
                    <div>
                        <h4>product name here</h4>
                        <h6>$12.50</h6>
                    </div>
                </div>
                <div className='product-card'>
                    <img
                        className='product-image'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Vesta_sewing_machine_IMGP0718.jpg/800px-Vesta_sewing_machine_IMGP0718.jpg'

                    />
                    <div>
                        <h4>product name here</h4>
                        <h6>$12.50</h6>
                    </div>
                </div>

                
              
              

            </div>


        </>
    )
}

export default PopulerProductComp