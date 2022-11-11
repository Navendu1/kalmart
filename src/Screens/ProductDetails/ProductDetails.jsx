import React from "react";

import "./productDetails.css";

import CarouselComp from "../Home/MiniComp/CarouselComp";
import { Color } from "../../Color";
import ProductCardComp from "../../MiniComp/ProductCardComp";
import Hader from "../../MiniComp/Hader";
import Categories from "../Home/MiniComp/Categories";
import Youtube from "./Youtube";

function ProductDetails() {
  return (
    <div>
      <Hader />
      {/* <Categories/> */}

      <CarouselComp />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <text className="view-more-details-page" style={{ color: Color.blue }}>
          view more from companyname
        </text>

        <text className="product-name-details-page">
          Product name goes here
        </text>

        <text className="product-price-details-page">Price</text>
      </div>

      <div>
        <text>
          <h4>Highlight</h4>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </text>
      </div>

      {/* youtube videos */}
      <Youtube />

      <div>
        <h4>Product Description</h4>
        <p style={{ paddingLeft: "1px" }}>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div>
        <div>
          <h4>simmiler products</h4>

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

        <div
          style={{
            width: "100%",
            borderColor: Color.black,
            marginTop: "5px",

            // position: " -webkit - sticky",
            // position: "sticky",
            bottom: 0,
            display: "flex",
            gap: "5px",
          }}
        >
          <button
            style={{
              backgroundColor: "#196ddb",
              width: "100%",

              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              borderWidth: "0px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap:"10px"
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/bk3e0glVbvRC4Z0uEZ5Oso5wjS89r1P_X5e-k3N_UBkTPXZLhGv50rRy7LAuDzzC9w=w240-h480-rw"
              width={40}
              height={40}
              alt=""
              style={{
                borderRadius: "50%",
              }}
            />
            <text
              style={{
                fontSize: "25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              Call Now
            </text>
          </button>

          <button
            style={{
              backgroundColor: "#44eb61",
              width: "100%",

              padding: "10px",
              marginTop: "10px",
              borderRadius: "10px",
              borderWidth: "0px",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw"
              width={40}
              height={40}
              alt=""
              style={{
                borderRadius: "50%",
              }}
            />
            <text
              style={{
                fontSize: "25px",
                color: "white",
                fontWeight: "600",
              }}
            >
              join Group
            </text>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

// style={{
//   backgroundColor: Color.BananaYellow,
//   width: "100%",
//   borderColor: Color.black,
//   padding: "10px",
//   marginTop: "10px",
//   borderRadius: "10px",
//   // position: " -webkit - sticky",
//   // position: "sticky",
//   bottom: 0,
// }}
