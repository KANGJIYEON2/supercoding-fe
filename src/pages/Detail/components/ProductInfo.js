// components/Detail/ProductInfo.js
import React, { useState } from "react";

const ProductInfo = () => {
  const [selectedVolume, setSelectedVolume] = useState("300ml");
  const [selectedQuantity, setSelectedQuantity] = useState(100);

  const volumes = ["150ml", "300ml", "450ml", "500ml", "1L", "1.5L", "2L"];
  const quantities = [
    { amount: 40, price: 10300 },
    { amount: 60, price: 15450 },
    { amount: 80, price: 20600 },
    { amount: 100, price: 25750 },
  ];

  return (
    <div className="product-info-container">
      <div className="product-header">
        <div className="product-badge">쿠팡추천</div>
        <h1>아이시스 8.0 ECO 생수 무라벨, 300ml, 100개</h1>
        <div className="seller">원산지: 상품 상세설명 참조</div>
      </div>

      <div className="rating-wrap">
        <span className="rating">4.8</span>
        <div className="stars">★★★★★</div>
        <span className="review-count">92,644개 상품평</span>
      </div>

      <div className="price-wrap">
        <div className="discount">
          14%
          <span className="original-price">30,000원</span>
        </div>
        <div className="price">
          <span className="current-price">25,750원</span>
          <div className="unit-price">(100ml당 86원)</div>
        </div>
      </div>

      <div className="delivery-info">
        <div className="wow-badge">WOW</div>
        <div className="delivery-text">
          <span className="delivery-date">내일(수) 12/11</span>
          <span className="delivery-time">도착 보장</span>
        </div>
      </div>

      <div className="volume-selector">
        <h3>더 많은 옵션 보기</h3>
        <div className="volume-options">
          {volumes.map((volume) => (
            <button
              key={volume}
              className={`volume-btn ${
                selectedVolume === volume ? "active" : ""
              }`}
              onClick={() => setSelectedVolume(volume)}
            >
              {volume}
            </button>
          ))}
        </div>
      </div>

      <div className="quantity-selector">
        {quantities.map(({ amount, price }) => (
          <label key={amount} className="quantity-option">
            <input
              type="radio"
              name="quantity"
              checked={selectedQuantity === amount}
              onChange={() => setSelectedQuantity(amount)}
            />
            <span>{amount}개</span>
            <span className="option-price">
              {price.toLocaleString()}원
              <span className="unit-price">100ml당 86원</span>
            </span>
          </label>
        ))}
      </div>

      <div></div>

      <div className="purchase-buttons">
        <button className="cart-button">장바구니 담기</button>
        <button className="buy-button">바로구매</button>
      </div>
    </div>
  );
};

export default ProductInfo;
