import React from "react";
import { Color } from "../../../../Color";
import ProductCardComp from "../../../../MiniComp/ProductCardComp";

import "./product.css";

import { useNavigate } from "react-router-dom";

function PopulerProductComp() {
  let navigate = useNavigate();

  return (
    <>
      {/* heading section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <h2 className="populerProductText">Populer Products</h2>
        {/* on click to show all products */}

        <button
         style={{ background: "transparent",
         borderWidth:'0px',
         color: Color.blue,
         fontSize: "15px",
         fontWeight:'bold'
         }}
        className="texthh" onClick={() => navigate("/allProduct")}>
         
            View All Products 
        
        </button>
      </div>

      {/* .............show all populer products............ */}
      <div className="product-card-container">
        <ProductCardComp
          img={
            "https://5.imimg.com/data5/QW/TC/HT/SELLER-1371067/automatic-brick-making-machine-500x500.jpg"
          }
          name={"B39/40 BRICKS FULLY AUTOMATIC FLY ASH BRICKS MACHINE"}
          price={"₹62,220.00"}
        />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
      </div>
    </>
  );
}

export default PopulerProductComp;
