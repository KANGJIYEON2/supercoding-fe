// pages/Detail/components/ProductTabs/TabContents/ProductReview.js
import React from "react";

const ProductReview = () => {
  const reviewImages = [
    "/images/review1.jpg",
    "/images/review2.jpg",
    "/images/review3.jpg",
    "/images/review4.jpg",
    "/images/review5.jpg",
    "/images/review6.jpg",
    "/images/review7.jpg",
  ];

  return (
    <div id="review-section" className="tab-section">
      <div className="review-header">
        <div className="reviewer-info">
          <div className="profile-image">
            <img src="/images/profile.jpg" alt="프로필" />
          </div>
          <div className="reviewer-detail">
            <div className="reviewer-name">임*선</div>
            <div className="rating-stars">★★★★★</div>
            <div className="review-date">2024.12.09</div>
            <div className="purchase-info">펜타곱 구매(쿠)</div>
          </div>
        </div>
      </div>

      <div className="review-content">
        <div className="product-name">
          아이시스 8.0 ECO 생수 무라벨 300ml, 100개
        </div>
        <div className="product-option">
          제품 리뷰: 아이시스 8.0 무라벨 에코생수 300ml (100개입)
        </div>

        <div className="review-images">
          {reviewImages.map((img, index) => (
            <div key={index} className="review-image">
              <img src={img} alt={`구매 후기 이미지 ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="review-text">
          <h4>장점</h4>
          <ol>
            <li>편리한 무라벨 디자인</li>
            <li>적당한 용량</li>
            <li>대량 구매로 가성비</li>
            <li>물맛이 깔끔</li>
          </ol>

          <h4>단점</h4>
          <ol>
            <li>무겁기</li>
            <li>조금 쓰레기</li>
          </ol>

          <h4>총평</h4>
          <p>
            아이시스 8.0 무라벨 생수는 환경을 생각하면서도 편리함을 놓치지 않은
            제품입니다. 특히 대량 구매가 필요한 실생에서 활용도가 높아
            추천드립니다.
          </p>
        </div>

        <div className="review-footer">
          <div className="helpful-info">
            <span>도움이 돼요</span>
            <span>도움 안 돼요</span>
          </div>
          <button className="report-button">신고하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
