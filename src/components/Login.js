import React, { useState } from 'react';
import EmailLogin from './EmailLogin'; // 이메일 로그인 컴포넌트
import './Login.css';

const Login = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false); // 이메일 로그인 컴포넌트 표시 상태
  const [selectedButton, setSelectedButton] = useState(null); // 클릭된 버튼 상태

  // 버튼 클릭 시 처리 함수
  const handleButtonClick = (button) => {
    setSelectedButton(button);
    if (button === 'email') {
      setShowEmailLogin(true);
    }
  };

  return (
    <div className="coupang-login-page">
      <div className="logo-container">
        <div className="login-logo"></div>
      <div className="login-page">
      <button
            onClick={() => handleButtonClick('email')}
            className={`login-option ${selectedButton === 'email' ? 'active' : ''}`}
          >
            이메일 로그인
          </button>
          <button
            onClick={() => handleButtonClick('kakao')}
            className={`login-option ${selectedButton === 'kakao' ? 'active' : ''}`}
          >
            카카오톡 로그인
          </button>
          <button
            onClick={() => handleButtonClick('naver')}
            className={`login-option ${selectedButton === 'naver' ? 'active' : ''}`}
          >
            네이버 로그인
          </button>
      </div>
      {/* 이메일 로그인 컴포넌트 조건부 렌더링 */}
      {showEmailLogin && <EmailLogin />}
    </div>
  </div>
  );
};

export default Login;
