import React from "react";

import { useNavigate } from "react-router-dom";


function ProductCardComp({ data }) {
  const { image1, name, price,id} = data ||{}
  let navigate = useNavigate();

  return (
    <div className="product-card click" onClick={() => navigate(`/productDetails/${id}`,{state:data})}>
      <img
        style={{ objectFit: "cover" }}
        className="product-image"
        src={image1}
        alt="loading"
      />
      <div>
        <text className="product-name-style">
          {"B39/40 BRICKS FULLY AUTOMATIC FLY ASH BRICKS MACHINE"}</text>
        <br />
        <text className="product-price-style">{`₹${price}`} </text>
      </div>
    </div>
  );
}

export default ProductCardComp;
