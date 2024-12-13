import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Naver.css";

function NaverLogin() {
 const location = useLocation(); // 현재 경로 정보를 가져옴

  return (
    <div className="login-container">
      <h1 className="logo">NAVER</h1>
      <p className="info-text">쿠팡 이용을 위해 네이버에 로그인해 주세요.</p>
      <form className="login-form">
        <div className="input-group">
          <input type="text" placeholder="아이디 또는 전화번호" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" />
            로그인 상태 유지
          </label>
          <span>IP보안 ON</span>
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
      <div className="links">
        <a href="/find-password">비밀번호 찾기</a> | <a href="/find-id">아이디 찾기</a> | <a href="/signup">회원가입</a>
      </div>
    </div>
  );
};

export default NaverLogin;