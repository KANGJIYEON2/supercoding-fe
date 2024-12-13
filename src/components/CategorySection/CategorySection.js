import React from "react";
import "./CategorySection.style.css";

const CategorySection = ({ categoryName, hotKeywords, products }) => {
  return (
    <section className="category-section">
      <div className="category-container">
        {/* 왼쪽 정보 */}
        <div className="category-info">
          <h2 className="category-name">{categoryName}</h2>
          <a href="#" className="category-link">
            바로가기 &gt;
          </a>
          <div className="hot-keywords">
            {hotKeywords.map((keyword, index) => (
              <a href="#" className="keyword" key={index}>
                {keyword}
              </a>
            ))}
          </div>
        </div>

        {/* 중간 이미지 */}
        <div className="category-image">
          <img
            src={products[0]?.image || "https://via.placeholder.com/1200x300"}
            alt={`${categoryName} 배너`}
            className="category-banner"
          />
        </div>

        {/* 오른쪽 상품 목록 */}
        <div className="products-grid">
          {products.slice(0, 6).map((product, index) => (
            <div className="product-card" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}원</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
