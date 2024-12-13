import React from "react";
import "./Section.style.css";

const Section = ({ title, subtitle, products }) => {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <div className="section-products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}원</p>
              <p className="product-original-price">
                {Math.floor(product.price * 1.2)}원
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
