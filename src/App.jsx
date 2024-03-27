import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { productData } from "./Components/Data";
import Products from "./Components/Products";
import './Css/product.css'

function App() {
  return (
    <>
      <Header />
      <div className="product-main">
        {productData?.map((productData) => (
          <Products key={productData.id} productData={productData} />
        ))}
      </div>
    </>
  );
}

export default App;
