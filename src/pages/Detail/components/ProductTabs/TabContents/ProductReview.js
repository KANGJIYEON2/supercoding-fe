import React from "react";

const ProductReview = () => {
  return (
    <div className="review-container">
      <div className="review-header">
        <h3>상품평</h3>
        <span className="review-guide">
          동일한 상품에 대해 작성된 상품평으로 편하게는 다를 수 있습니다.
        </span>
      </div>

      <div className="rating-summary">
        <div className="stars">★★★★★</div>
        <span className="review-count">92,688</span>
        <button className="review-detail-btn">자세히보기</button>
      </div>

      <div className="review-media">
        <div className="video-thumbnail">
          <span className="play-time">0:24</span>
        </div>
        <div className="review-images-slider">
          {/* 이미지 슬라이더 */}
          <span className="image-count">5,312</span>
          <span className="more-text">더보기</span>
        </div>
      </div>

      <div className="review-analysis">
        <div className="product-chart">
          <h4>포장재질</h4>
          <div className="chart-item">
            <span>잘 찌그러져요</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "18%" }}></div>
            </div>
          </div>
          <div className="chart-item">
            <span>적당히 튼튼해요</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "77%" }}></div>
            </div>
          </div>
          <div className="chart-item">
            <span>아주 딱딱해요</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: "5%" }}></div>
            </div>
          </div>
        </div>

        <div className="satisfaction-chart">
          <h4>수원지 표기</h4>
          <div className="chart-item">
            <span>명확해요</span>
            <div className="progress-bar">
              <div className="progress blue" style={{ width: "84%" }}></div>
            </div>
          </div>
          <div className="chart-item">
            <span>찾기 어려워요</span>
            <div className="progress-bar">
              <div className="progress blue" style={{ width: "14%" }}></div>
            </div>
          </div>
          <div className="chart-item">
            <span>안적혀있어요</span>
            <div className="progress-bar">
              <div className="progress blue" style={{ width: "2%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-filter">
        <div className="filter-left">
          <button className="active">베스트순</button>
          <button>최신순</button>
        </div>
        <div className="filter-right">
          <input type="text" placeholder="상품평을 검색해보세요" />
          <button className="search-btn">검색</button>
          <div className="sort-dropdown">
            <span>92,688</span>
          </div>
        </div>
      </div>

      <div className="review-list">
        <div className="review-item">
          <div className="reviewer-info">
            <span className="reviewer-name">임*선</span>
            <div className="rating">★★★★★</div>
            <span className="review-date">2024-12-09</span>
            <span className="product-info">아이시스8.0 무라벨 300ml 100개</span>
          </div>
          <div className="review-content">
            <div className="review-images">{/* 리뷰 이미지 7개 */}</div>
            <div className="review-text">
              <p className="review-title">장점</p>
              <ol>
                <li>편리한 포장과 디자인</li>
                <li>적당한 용량</li>
                <li>다양한 구매 가격대</li>
                <li>플라스틱 감소</li>
              </ol>
              <p className="review-title">단점</p>
              <ol>
                <li>포장 크기</li>
                <li>보관 스페이스</li>
              </ol>
              <p className="review-title">총평</p>
              <p>
                아이시스8.0 무라벨 상수는 환경을 생각하면서도 편의성을 놓치지
                않은 제품입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
