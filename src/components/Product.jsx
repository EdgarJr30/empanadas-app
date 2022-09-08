import React from "react";
import "../stylesheets/Product.css";
import "../img/empanada.png";

function Product({ productName, productPrice, productAddToCart }) {
  return (
    <div className="product-container">
      <div className="product">
        <div className="product-description">
          <img src={require(`../img/empanada.png`)} alt="" />
          <p>{productName}</p>
        </div>
      </div>
      <div className="price add-to-cart">
        <div className="">
          <span>{productPrice}</span>
        </div>
        <div className="">
          <span>{productAddToCart}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
