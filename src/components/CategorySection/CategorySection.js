import React, { useState } from "react";
import "./CategorySection.style.css";

const CategorySection = ({ categoryName, hotKeywords, products }) => {
  const [page, setPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 6; // 페이지당 상품 수
  const totalPages = Math.min(5, Math.ceil(products.length / itemsPerPage)); // 최대 5페이지 제한

  const handlePageChange = (newPage) => {
    setPage(newPage); // 페이지 변경
  };

  const currentProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

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
          {currentProducts.map((product, index) => (
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

      {/* 페이지네이션 */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-dot ${page === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
