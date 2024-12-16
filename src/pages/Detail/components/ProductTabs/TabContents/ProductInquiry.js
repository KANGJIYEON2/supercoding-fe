// ProductInquiry.js
import React from "react";

const ProductInquiry = () => {
  return (
    <div className="inquiry-container">
      <div className="inquiry-header">
        <h3>상품문의</h3>
        <div className="inquiry-notice">
          <ul>
            <li>
              구매한 상품의 취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
            </li>
            <li>
              상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지
              않습니다.
            </li>
            <li>
              가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는
              문의는 고객센터 내 1:1 문의하기를 이용해주세요.
            </li>
            <li>
              해당 상품 자체와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의
              글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수
              있습니다.
            </li>
            <li>
              공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한
              개인정보는 절대 남기지 말아주세요.
            </li>
          </ul>
        </div>
      </div>

      <div className="inquiry-list">
        {/* 문의 항목 */}
        <div className="inquiry-item">
          <div className="item-header">
            <span className="product-info">300ml | 40개 | 에코몰지</span>
            <span className="inquiry-date">2024/11/03 19:33:46</span>
          </div>
          <div className="inquiry-content">
            <p>손수레가**********</p>
            <p>배송일로부터 되었는데</p>
            <p>문의가 될까요합니다</p>
            <p>어려분누분들도 이런적있었는데</p>
            <p>어떻게하시죠?</p>
            <p>같이로켓배송시킨 카운터클럽있고</p>
            <p>출발안된점요</p>
          </div>
        </div>

        {/* 답변 항목 */}
        <div className="answer-item">
          <div className="answer-badge">답변</div>
          <div className="answer-content">
            <div className="answerer">에프앤지</div>
            <div className="answer-text">
              안녕하세요 고객님 저희몰에서는 주문번호가 확인되시지 않으십니다.
              통시 로켓배송으로 주문하셨으면 고객센터로 문의부탁드립니다.
              감사합니다.
            </div>
            <div className="answer-date">2024/11/03 22:24:42</div>
          </div>
        </div>
      </div>

      <div className="inquiry-footer">
        <div className="footer-notice">
          판매 목적의 상품 또는 허위과장광고로 인한 자사제산물을 절대하여 상품의
          경우 신고하여 주시기 바랍니다.
        </div>
        <button className="write-inquiry-btn">신고하기</button>
      </div>
    </div>
  );
};

export default ProductInquiry;
