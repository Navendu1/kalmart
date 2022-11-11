import React from "react";

import { useNavigate } from "react-router-dom";


function ProductCardComp({img,name,price}) {
  
  let navigate = useNavigate();

  return (
    <div className="product-card" onClick={()=> navigate('/productDetails')}>
      <img
        style={{ objectFit: "cover" }}
        className="product-image"
        src={img}
        alt="loading"
      />
      <div>
        <text className="product-name-style">
          {name}</text>
        <br/>
        <text className="product-price-style">{price} </text>
      </div>
    </div>
  );
}

export default ProductCardComp;
