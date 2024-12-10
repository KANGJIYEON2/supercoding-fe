import React from "react";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import CompareProducts from "./components/CompareProducts";
import "./Detail.style.css";
import ProductTabs from "./components/ProductTabs/ProductTabs";

const DetailPage = () => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <section className="product-detail">
          <ProductImage />
          <ProductInfo />
        </section>
      </div>
      <CompareProducts />
      <ProductTabs />
    </div>
  );
};

export default DetailPage;
