import React from "react";
import "../Css/product.css";

function Products({ productData }) {
  const { id, title, desc, price } = productData;
  return (
      <div className="product-page">
        <div className="product">
          <h1>{productData.id}</h1>
          <h2>{productData.title}</h2>
          <h3>{productData.desc}</h3>
          <h4>{productData.price}</h4>
          <button>BUY</button>
        </div>
      </div>
  );
}

export default Products;
