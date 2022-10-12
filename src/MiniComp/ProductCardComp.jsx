import React from 'react'

function ProductCardComp() {
  return (
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
  )
}

export default ProductCardComp