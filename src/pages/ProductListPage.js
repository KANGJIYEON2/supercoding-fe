import React, { useState } from "react";
import dummyData from "../dummyData";
import "./ProductListPage.style.css";

const ITEMS_PER_PAGE = 12; // 페이지당 표시할 상품 수

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 모든 상품 데이터
  const filteredProducts = dummyData.products;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-list-page">
      {/* 상단 필터 */}
      <div className="filter-bar">
        <h1 className="category-title">전체 상품</h1>
        <div className="filter-options">
          <button className="filter active">쿠팡 랭킹순</button>
          <button className="filter">낮은 가격순</button>
          <button className="filter">높은 가격순</button>
          <button className="filter">판매량순</button>
          <button className="filter">최신순</button>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-original-price">
                <span>50%</span>
                <del>₩{product.price * 2}</del>
              </p>
              <p className="product-price">₩{product.price}</p>
              <p className="product-shipping">로켓배송</p>
              <p className="product-delivery">내일(금) 도착 보장</p>
              <div className="product-rating">
                ★★★★★<span>(12115)</span>
              </div>
              <p className="product-reward">최대 795원 적립</p>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
