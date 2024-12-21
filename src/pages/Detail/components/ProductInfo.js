import React, { useState } from "react";

const ProductInfo = () => {
  const [selectedVolume, setSelectedVolume] = useState("300ml");
  const [selectedQuantity, setSelectedQuantity] = useState(100);
  const [quantity, setQuantity] = useState(1);

  const handleReviewClick = () => {
    const reviewSection = document.getElementById("review-section");
    if (reviewSection) {
      const headerOffset = 60; // 탭 메뉴의 높이
      const elementPosition = reviewSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const volumes = ["150ml", "300ml", "450ml", "500ml", "1L", "1.5L", "2L"];

  const volumeQuantities = {
    "150ml": [
      { amount: 30, price: 8900, unitPrice: 98, hasRocketDelivery: true },
      { amount: 60, price: 16800, unitPrice: 93, hasRocketDelivery: true },
      { amount: 90, price: 23700, unitPrice: 88, hasRocketDelivery: true },
    ],
    "300ml": [
      { amount: 40, price: 11300, unitPrice: 94, hasRocketDelivery: true },
      {
        amount: 80,
        price: 21400,
        unitPrice: 89,
        hasRocketDelivery: true,
        stockWarning: true,
      },
      { amount: 100, price: 26770, unitPrice: 89, hasRocketDelivery: true },
    ],
    "450ml": [
      { amount: 20, price: 12400, unitPrice: 96, hasRocketDelivery: true },
      { amount: 40, price: 23800, unitPrice: 92, hasRocketDelivery: true },
      { amount: 60, price: 34200, unitPrice: 90, hasRocketDelivery: true },
    ],
    "500ml": [
      { amount: 20, price: 13500, unitPrice: 95, hasRocketDelivery: true },
      { amount: 40, price: 25000, unitPrice: 91, hasRocketDelivery: true },
      { amount: 50, price: 36500, unitPrice: 88, hasRocketDelivery: true },
    ],
    "1L": [
      { amount: 15, price: 15600, unitPrice: 104, hasRocketDelivery: true },
      { amount: 30, price: 29900, unitPrice: 99, hasRocketDelivery: true },
      { amount: 45, price: 43500, unitPrice: 97, hasRocketDelivery: true },
    ],
    "1.5L": [
      { amount: 12, price: 17800, unitPrice: 99, hasRocketDelivery: true },
      { amount: 24, price: 34600, unitPrice: 96, hasRocketDelivery: true },
      { amount: 36, price: 50400, unitPrice: 93, hasRocketDelivery: true },
    ],
    "2L": [
      { amount: 10, price: 19900, unitPrice: 99, hasRocketDelivery: true },
      { amount: 20, price: 38800, unitPrice: 97, hasRocketDelivery: true },
      { amount: 30, price: 56700, unitPrice: 95, hasRocketDelivery: true },
    ],
  };

  const deliveryInfo = {
    message: "내일 도착, 무료배송",
    date: "내일(목) 12/14 도착 보장",
    time: "(24시간 6분 내 주문 시 / 서울 경기 기준)",
    shipping: "무료배송",
  };

  const productDetails = [
    {
      label: "스피킹핸드는 유통기한",
      value: "2025-05-09 이거나 그 이후인 상품",
    },
    { label: "증기 타입", value: "플라스틱병" },
    { label: "타입 유무", value: "무라벨" },
    { label: "수입자", value: "국내산" },
    { label: "가공품/원산품", value: "가공품" },
    { label: "주문상품번호", value: "8244112543 - 20472000660" },
  ];

  const points = {
    maxPoints: 1339,
    text: "최대 1339원 쿠팡캐시 적립 • 쿠페이 머니 결제시",
  };

  return (
    <div className="product-info-container">
      <div className="product-header">
        <div className="product-badge">쿠팡추천</div>
        <h1 className="product-title">
          아이시스 8.0 ECO 생수 무라벨, 300ml, 100개
        </h1>
        <div className="seller">원산지: 상품 상세설명 참조</div>
      </div>

      <div className="rating-wrap-h">
        <span className="rating-h">4.8</span>
        <div
          className="stars-h"
          onClick={handleReviewClick}
          style={{ cursor: "pointer" }}
        >
          ★★★★★
        </div>
        <span
          className="review-count-h"
          onClick={handleReviewClick}
          style={{ cursor: "pointer" }}
        >
          92,644개 상품평
        </span>
      </div>

      <div className="price-wrap-h">
        <div className="discount">
          14%
          <span className="original-price">30,000원</span>
        </div>
        <div className="price-h">
          <span className="current-price">25,750원</span>
          <div className="unit-price">(100ml당 86원)</div>
        </div>
      </div>

      <div className="delivery-info-h">
        <div className="delivery-badge-h">
          <p>이 상품은 </p>
          {deliveryInfo.message}
        </div>
        <div className="delivery-detail-h">
          <span className="delivery-date-h">{deliveryInfo.date}</span>
          <span className="delivery-time-h">{deliveryInfo.time}</span>
          <div className="h-shipping-type-h">{deliveryInfo.shipping}</div>
        </div>
      </div>

      <div className="volume-selector">
        <h3>더 많은 옵션 보기</h3>
        <p></p>
        <div className="volume-options">
          {volumes.map((volume) => (
            <button
              key={volume}
              className={`volume-btn ${
                selectedVolume === volume ? "active" : ""
              }`}
              onClick={() => {
                setSelectedVolume(volume);
                setSelectedQuantity(volumeQuantities[volume][0].amount);
              }}
            >
              {volume}
            </button>
          ))}
        </div>
      </div>

      <div className="quantity-selector">
        {volumeQuantities[selectedVolume].map(
          ({ amount, price, unitPrice, hasRocketDelivery, stockWarning }) => (
            <label key={amount} className="quantity-option">
              <input
                type="radio"
                name="quantity"
                checked={selectedQuantity === amount}
                onChange={() => setSelectedQuantity(amount)}
              />
              <div className="option-info">
                <span className="quantity">{amount}개</span>
                <div className="price-wrap">
                  <span className="price">{price.toLocaleString()}원</span>
                  <div className="unit-price">100ml당 {unitPrice}원</div>
                </div>
                {hasRocketDelivery && (
                  <span className="rocket-badge">로켓배송</span>
                )}
              </div>
            </label>
          )
        )}
      </div>

      <button className="more-options">모든 옵션 보기 ></button>

      <div className="points-info">
        <p className="points-1">적립</p>
        <span className="points">{points.text}</span>
        <button className="points-detail">혜택보기 ></button>
      </div>

      <p className="purchase-area text">
        PC에서도 간편한 결제 쿠페이머니 카드 계좌이체
      </p>
      <div className="purchase-area">
        <div className="quantity-control">
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
          />
        </div>
        <button className="d-cart-button">장바구니 담기</button>
        <button className="d-buy-button">바로구매 ></button>
      </div>

      <div className="product-details">
        {productDetails.map((detail, index) => (
          <div key={index} className="detail-item">
            <span className="detail-label">{detail.label}:</span>
            <span className="detail-value">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
