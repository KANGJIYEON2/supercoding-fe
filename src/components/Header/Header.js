import React from "react";
import { Link } from "react-router-dom";
import "./Header.style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* 상단 바 */}
        <div className="header-top">
          <div className="header-top-left">
            <span>즐겨찾기</span>
            <div className="dropdown">
              <span className="dropdown-toggle">입점신청</span>
              <div className="dropdown-menu">
                <Link to="/openmarket">오픈마켓</Link>
                <Link to="/travel-tickets">여행티켓</Link>
                <Link to="/rocket-delivery">로켓배송</Link>
                <Link to="/marketing">제휴마케팅</Link>
              </div>
            </div>
          </div>
          <div className="header-top-right">
            <span>로그인</span>
            <span>회원가입</span>
            <div className="dropdown">
              <span className="dropdown-toggle">고객센터</span>
              <div className="dropdown-menu">
                <Link to="/faq">자주묻는 질문</Link>
                <Link to="/support">1:1 채팅문의</Link>
                <Link to="/feedback">고객의 소리</Link>
                <Link to="/returns">취소/반품안내</Link>
              </div>
            </div>
            <span>판매자가입</span>
          </div>
        </div>

        {/* 메인 헤더 */}
        <div className="header-main">
          <div className="header-category">
            <div className="dropdown">
              <span className="dropdown-toggle">카테고리</span>
              <div className="dropdown-menu">
                <Link to="/electronics">전자제품</Link>
                <Link to="/fashion">패션</Link>
                <Link to="/groceries">식료품</Link>
                <Link to="/books">도서</Link>
              </div>
            </div>
          </div>
          <Link to="/" className="header-logo">
            <img
              src="https://i.namu.wiki/i/5XFJC8U_bqeyLVVTS5TScBqa6HzWJHAC2SuWFyV1Dp4dy1lmNfsc-fsZyWBDFQAWQz27tEy-M0MPf_Ao9zllnncZI-PcRF4M4L13AhcyAx68SC5gePfVO3oEz1QPX0IGzYL32L7Kgsqj44y6OD7Wvg.svg"
              alt="쿠팡 로고"
              className="logo-img"
            />
          </Link>

          <div className="header-search">
            <input
              className="search-input"
              type="text"
              placeholder="찾고싶은 상품을 검색해보세요"
            />
            <button className="search-button">검색</button>
          </div>

          <div className="header-icons">
            {/* 마이쿠팡 */}
            <div className="icon-container dropdown">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="icon-label">마이쿠팡</span>
              <div className="dropdown-menu">
                <Link to="/orders">주문목록</Link>
                <Link to="/wishlist">찜리스트</Link>
                <Link to="/cancellations">취소목록</Link>
              </div>
            </div>

            {/* 장바구니 */}
            <div className="icon-container dropdown">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.7 15h8.59c.68 0 1.25-.45 1.42-1.11l2.1-7.58C19.95 5.52 19.5 5 18.89 5H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.7l1.1-2z" />
                </svg>
              </div>
              <span className="badge">0</span>
              <span className="icon-label">장바구니</span>
              <div className="dropdown-menu">
                <p>장바구니에 담긴 상품이 없습니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 네비게이션 */}
        <nav className="header-nav">
          <Link to="/coupang-play">쿠팡플레이</Link>
          <Link to="/rocket-delivery">로켓배송</Link>
          <Link to="/rocket-fresh">로켓프레시</Link>
          <Link to="/christmas">크리스마스</Link>
          <Link to="/coupang-biz">쿠팡비즈</Link>
          <Link to="/global">로켓직구</Link>
          <Link to="/goldbox">골드박스</Link>
          <Link to="/seller-deals">판매자특가</Link>
          <Link to="/wow-discounts">와우회원할인</Link>
          <Link to="/events">이벤트/쿠폰</Link>
          <Link to="/returns">반품마켓</Link>
          <Link to="/stores">착한상점</Link>
          <Link to="/campaigns">기획전</Link>
          <Link to="/travel">쿠팡트래블</Link>
          <Link to="/open-market">입점신청</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
