import React from "react";
import Hader from "../../MiniComp/Hader";
import ProductCardComp from "../../MiniComp/ProductCardComp";

function AllProduct() {
  return (
    <div>
   <Hader/>
      <div className="product-card-container">
        <ProductCardComp
          img={
            "https://5.imimg.com/data5/QW/TC/HT/SELLER-1371067/automatic-brick-making-machine-500x500.jpg"
          }
          name={"B39/40 BRICKS FULLY AUTOMATIC FLY ASH BRICKS MACHINE"}
        />

        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
        <ProductCardComp />
      </div>
    </div>
  );
}

export default AllProduct;
