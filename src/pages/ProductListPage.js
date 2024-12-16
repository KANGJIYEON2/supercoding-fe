import React, { useState } from "react";
import dummyData from "../dummyData";
import "./ProductListPage.style.css";

const ITEMS_PER_PAGE = 12; // 페이지당 표시할 상품 수

const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    shipping: [],
  });

  // 모든 상품 데이터
  const filteredProducts = dummyData.products.filter((product) => {
    // 필터 로직 추가 (예: 카테고리, 브랜드, 배송 옵션)
    const matchesCategory =
      selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(product.category);

    const matchesBrand =
      selectedFilters.brand.length === 0 ||
      selectedFilters.brand.includes(product.brand);

    const matchesShipping =
      selectedFilters.shipping.length === 0 ||
      selectedFilters.shipping.includes(product.shipping);

    return matchesCategory && matchesBrand && matchesShipping;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((item) => item !== value);
      } else {
        newFilters[type].push(value);
      }
      return newFilters;
    });
    setCurrentPage(1); // 필터 변경 시 첫 페이지로 이동
  };

  return (
    <div className="product-list-page">
      {/* 왼쪽 필터 */}
      <aside className="filter-section">
        <h2 className="filter-title">필터</h2>

        {/* 배송 옵션 */}
        <div className="filter-group">
          <h3 className="filter-group-title">배송 옵션</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("shipping", "로켓배송")}
            />
            로켓배송
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("shipping", "무료배송")}
            />
            무료배송
          </label>
        </div>

        {/* 카테고리 */}
        <div className="filter-group">
          <h3 className="filter-group-title">카테고리</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("category", "가전디지털")}
            />
            가전디지털
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("category", "완구/취미")}
            />
            완구/취미
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("category", "스포츠")}
            />
            스포츠
          </label>
        </div>

        {/* 브랜드 */}
        <div className="filter-group">
          <h3 className="filter-group-title">브랜드</h3>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("brand", "삼익악기")}
            />
            삼익악기
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("brand", "야마하")}
            />
            야마하
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("brand", "바니랜드")}
            />
            바니랜드
          </label>
        </div>
      </aside>

      {/* 상품 목록 */}
      <main className="product-list">
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

        {/* 상품 그리드 */}
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
      </main>
    </div>
  );
};

export default ProductListPage;
