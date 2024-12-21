import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import "./EmailLogin.css";

function Login(){
  const [selectedButton, setSelectedButton] = useState(null); // 클릭된 버튼 상태
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 버튼 클릭 시 처리 함수
  const handleButtonClick = (button) => {
    setSelectedButton(button);
    if (button === 'email') {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('아이디(이메일)를 입력해주세요.');
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      alert('로그인 성공');
    }
  };

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="coupang-login-page">
        <div className="login-logo"></div>
        <div className='login-page-button'>
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
          <div className="emaillogin-page">
      <div className="emaillogin-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="emaillogin-id-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                if (!email) {
                  setEmailError('아이디(이메일)를 입력해주세요.');
                } else {
                  setEmailError('');
                }
              }}
              placeholder="아이디(이메일)"
              className={`emaillogin-id ${emailError ? 'error' : ''}`}
            />
            {emailError && <p className="emaillogin-error-message">{emailError}</p>}
          </div>

          <div className="emaillogin-password-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (!password) {
                  setPasswordError('비밀번호를 입력해주세요.');
                } else {
                  setPasswordError('');
                }
              }}
              placeholder="비밀번호"
              className={`emaillogin-password ${passwordError ? 'error' : ''}`}
            />
            {passwordError && <p className="emaillogin-password-error-message">{passwordError}</p>}
          </div>

          <div className="emaillogin-auto-login">
            <input
              type="checkbox"
              checked={autoLogin}
              onChange={() => setAutoLogin(!autoLogin)}
            />
            <label>자동 로그인</label>
            <label>아이디 • 비밀번호 찾기</label>
          </div>
          <button type="submit" className="emaillogin-login-btn">로그인</button>
        </form>

        <div className='emaillogin-bar'></div>
        <div className="signup-link">
          <button onClick={handleSignUp} className="email-signup-button">
            회원가입
          </button>
        </div>

        <div className="business-link">
          <p className="customer">법인 고객이신가요?</p>
          <p className="customer">사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
          <p className="emaillogin-easy-signup-background">쿠팡비즈 간편가입</p>
        </div>

        <div className='emaillogin-companyname-background'>
          Coupang Corp. All rights reserved.
        </div>
      </div>
    </div>
      </div>
  );
};

export default Login;
