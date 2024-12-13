import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 주요 링크 */}
        <div className="footer-links">
          <span>회사소개</span>
          <span>Investor Relations</span>
          <span>인재채용</span>
          <span>입점 / 제휴문의</span>
          <span>공지사항</span>
          <span>고객의 소리</span>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>쿠팡페이 이용약관</span>
          <span>신뢰관리센터</span>
          <span>제휴마케팅</span>
          <span>광고안내</span>
          <span>Global Site</span>
        </div>

        {/* 회사 정보 */}
        <div className="footer-company-info">
          <h3>EDUCATION PLATFORM</h3>
          <p>상호명 및 호스팅 서비스 제공: 학습용 회사</p>
          <p>대표이사: 홍길동</p>
          <p>주소: 서울시 학습구 학습로 123</p>
          <p>사업자 등록번호: 123-45-67890</p>
          <p>통신판매업신고: 2023-서울학습-1234</p>
          <p>365 고객센터 | 전자금융거래분쟁처리담당</p>
          <p>전화: 1234-5678 (유료)</p>
          <p>이메일: help@education.com</p>
        </div>

        {/* 보증 안내 */}
        <div className="footer-warranty">
          <p>
            <strong>채무지급보증 안내:</strong> 당사는 고객님이 현금 결제한
            금액에 대해 금융기관과 채무지급보증 계약을 체결하여 안전거래를
            보장하고 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
