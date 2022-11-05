import React from "react";

function ProductCardComp({img,name,price}) {
  return (
    <div className="product-card">
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
