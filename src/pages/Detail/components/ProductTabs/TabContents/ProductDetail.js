import React, { useState } from "react";

const ProductDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="product-section" className="tab-section">
      <div className="product-info-list">
        <h3>필수 표기정보</h3>
        <table className="info-table">
          <tbody>
            <tr>
              <th>제품명</th>
              <td>아이시스 8.0 무라벨 에코생수 300ml (100개입)</td>
            </tr>
            <tr>
              <th>소비기한</th>
              <td>2025-05-08 이거나 그 이후인 상품</td>
            </tr>
            <tr>
              <th>용기 타입</th>
              <td>플라스틱병</td>
            </tr>
            <tr>
              <th>리필 유무</th>
              <td>무라벨</td>
            </tr>
            <tr>
              <th>수입자</th>
              <td>국내산</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={`product-detail-content ${isExpanded ? "expanded" : ""}`}>
        <div className="detail-images">
          <img src="../../detail1.jpg" alt="상세이미지1" />
          <img src="../../detail2.jpg" alt="상세이미지2" />
          <img src="../../detail3.jpg" alt="상세이미지3" />
        </div>

        {!isExpanded ? (
          <div className="gradient-overlay">
            <button
              className="expand-button"
              onClick={() => setIsExpanded(true)}
            >
              상품정보 더보기
            </button>
          </div>
        ) : (
          <div className="collapse-button-wrapper">
            <button
              className="collapse-button"
              onClick={() => setIsExpanded(false)}
            >
              상품정보 접기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
