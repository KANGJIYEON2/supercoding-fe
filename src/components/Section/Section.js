import React, { useState, useEffect } from "react";
import "./Section.style.css";

const Section = ({ title, subtitle, products }) => {
  const [visibleProducts, setVisibleProducts] = useState(8); // 초기 표시 상품 개수

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setVisibleProducts((prev) => prev + 4); // 스크롤 시 4개 추가 로드
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // 이벤트 해제
    };
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <div className="section-products">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">무료배송</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
