import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './EmailLogin.css';
import './PhoneLogin.css';
import "./QrLogin.css";

function Login() {
  const [selectedButton, setSelectedButton] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [autoLogin, setAutoLogin] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phonelogin, setPhoneLogin] = useState('');
  const [phoneloginError, setPhoneLoginError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log("현재 선택된 버튼:", selectedButton);
  }, [selectedButton]);

  const handleSignUp = () => {
    navigate('/signup');
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

  return (
    <div className="coupang-login-page">
      <div className="login-logo"></div>

      {/* 로그인 옵션 버튼 */}
      <div className="login-page-button">
        <button
          onClick={() => setSelectedButton('email')}
          className={`login-option ${selectedButton === 'email' ? 'active' : ''}`}
        >
          이메일 로그인
        </button>
        <button
          onClick={() => setSelectedButton('phonelogin')}
          className={`login-option ${selectedButton === 'phonelogin' ? 'active' : ''}`}
        >
          휴대폰번호 로그인
        </button>
        <button
          onClick={() => setSelectedButton('naver')}
          className={`login-option ${selectedButton === 'naver' ? 'active' : ''}`}
        >
          QR코드 로그인
        </button>
      </div>

      {/* 이메일 로그인 UI */}
      {selectedButton === 'email' && (
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

            <div className="signup-link">
              <button onClick={handleSignUp} className="email-signup-button">
                회원가입
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 휴대폰번호 로그인 UI */}
      {selectedButton === 'phonelogin' && (
        <div className="phonelogin-container">
        <div className="phonelogin-text">
          쿠팡 계정에 등록된 휴대폰 번호를 입력해주세요.
        </div>
        <div className="phonelogin-input">
          <input
            type="text"
            value={phonelogin}
            onChange={(e) => setPhoneLogin(e.target.value)}
            onBlur={() => {
              if (!phonelogin) {
                setPhoneLoginError('휴대폰 번호를 입력해주세요.');
              } else {
                setPhoneLoginError('');
              }
            }}
            placeholder="휴대폰 번호"
            className={`input-field ${phoneloginError ? 'error' : ''}`}
          />
          {phoneloginError && (
            <p className="phonelogin-error-message">{phoneloginError}</p>
          )}
            <button type="submit" className="phonelogin-login-btn">인증번호 발송</button>
            <div className="signup-link">
              <button onClick={handleSignUp} className="email-signup-button">
                회원가입
              </button>
        </div>
        </div>
      </div>
      )}
      {/* QR코드 로그인 UI */}
      {selectedButton === 'qrcode' && (
        <div className="qrlogin-guide">
          <h3>쿠팡 앱을 통해 바로 로그인하려면 다음 단계에 따라 진행해 주세요</h3>
        <div className='qrlogin-number'>
          1. 휴대폰 카메라로 QR코드를 스캔하세요.
          2. 화면에서 아래의 숫자를 선택하면 로그인됩니다.
        </div>
        <div className='qrlogin-guide'>
          최신 버전의 앱에서만 QR로그인이 가능합니다.
        </div>
        </div>
      )}

      <div className="business-link">
        <p className="customer">법인 고객이신가요?</p>
        <p className="customer">사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
        <p className="emaillogin-easy-signup-background">쿠팡비즈 간편가입</p>
      </div>

      <div className="emaillogin-companyname-background">
        Coupang Corp. All rights reserved.
      </div>
    </div>
  );
}

export default Login;