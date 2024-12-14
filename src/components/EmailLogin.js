import React, { useState } from 'react';
import './EmailLogin.css';
import { useNavigate } from 'react-router-dom';

function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
          <button type="submit" className="emaillogin-login-button">로그인</button>
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
  );
};

export default EmailLogin;