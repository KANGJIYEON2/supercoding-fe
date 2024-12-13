import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    agree: {
      age: false,
      terms: false,
      financialTerms: false,
      privacy: false,
      thirdParty: false,
      marketing: false,
      ads: false,
      email: false,
      sms: false,
      push: false,
    },
  });
  
  const [emailError, setEmailError] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

// 이메일
  const handleEmailBlur = () => {
    if (!formData.email) {
      setEmailError("이메일을 입력하세요.");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError("유효한 이메일 주소를 입력해주세요.");
    } else {
      setEmailError("");
    }
  };
 // 비밀번호
 const handlePasswordBlur = () => {
  const errors = [];
  const { password } = formData;

  if (!password) {
    errors.push("x 영문/숫자/특수문자 2가지 이상 조합 (8~20자)");
    errors.push("x 3개 이상 연속되거나 동일한 문자/숫자 제외");
    errors.push("x 아이디(이메일)제외");
  } else {
    if (password.length < 8 || password.length > 20) {
      errors.push("영문/숫자/특수문자 2가지 이상 조합 (8~20자)");
    }
    if (
      !/[A-Za-z]/.test(password) ||
      !(/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password))
    ) {
      errors.push("3개 이상 연속되거나 동일한 문자/숫자 제외");
    }
    if (/(.)\1\1/.test(password)) {
      errors.push("아이디(이메일)제외");
    }
  }

  setPasswordErrors(errors);
};

 // 비밀번호 확인
  const validateConfirmPassword = (value) => {
    if (value !== formData.password) {
      setConfirmPasswordError("새 비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPasswordError("x 확인을 위해 새 비밀번호를 다시 입력해주세요.");
    }
  };
 // 이름
  const validateName = () => {
    if (!formData.name) {
      setNameError("이름을 정확하게 입력해주세요.");
    } else if (formData.name.length < 2) {
      setNameError("이름은 2자 이상이어야 합니다.");
    } else {
      setNameError("");
    }
  };
 // 휴대폰 번호
  const validatePhone = () => {
    const phonePattern = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
    if (!formData.phone) {
      setPhoneError("휴대폰 번호를 정확히 입력해주세요.");
    } else if (!phonePattern.test(formData.phone)) {
      setPhoneError("유효한 휴대폰 번호를 입력해주세요. (예: 010-1234-5678)");
    } else {
      setPhoneError("");
    }
  };

  // 모든 동의 항목 체크
  const handleAgreeAll = () => {
    const allChecked = !Object.values(formData.agree).every(Boolean);
    setFormData((prevData) => ({
      ...prevData,
      agree: {
        age: allChecked,
        terms: allChecked,
        financialTerms: allChecked,
        privacy: allChecked,
        thirdParty: allChecked,
        marketing: allChecked,
        ads: allChecked,
        email: allChecked,
        sms: allChecked,
        push: allChecked,
      },
    }));
  };

   // 마케팅 체크박스 하나로 모든 선택 항목 체크
   const handleMarketingChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      agree: {
        ...prevData.agree,
        marketing: !prevData.agree.marketing,
        ads: !prevData.agree.marketing ? false : prevData.agree.ads,
        email: !prevData.agree.marketing ? false : prevData.agree.email,
        sms: !prevData.agree.marketing ? false : prevData.agree.sms,
        push: !prevData.agree.marketing ? false : prevData.agree.push,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allRequiredAgreed = Object.entries(formData.agree)
      .filter(([key]) => key !== "marketing" && key !== "ads")
      .every(([, value]) => value);

    if (!allRequiredAgreed) {
      alert("필수 항목에 동의해주세요.");
      return;
    }

    console.log("회원가입 정보:", formData);
    navigate("/"); // 홈으로 리다이렉트
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("agree.")) {
      const field = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        agree: {
          ...prevData.agree,
          [field]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-logo"></div>
      <h2>회원정보를 입력해주세요</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="signup-email-container">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            placeholder="아이디(이메일)"
            className={`signup-email-input ${emailError ? "error" : ""}`}
            required
          />
          {emailError && <p className="email-error-message">{emailError}</p>}
        </div>
        <div className="signup-password-container">
  <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    onBlur={handlePasswordBlur}
    placeholder="비밀번호"
    className={`signup-password-input ${passwordErrors.length > 0 ? "error" : ""}`}
    required
  />
  {passwordErrors.length > 0 && (
    <div className="signup-password-error-message">
      {passwordErrors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  )}
</div>
        <div className="confirm-password-container">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={() => validateConfirmPassword(formData.confirmPassword)}
            placeholder="비밀번호 확인"
            className={`confirm-password-input ${confirmPasswordError ? "error" : ""}`}
            required
          />
          {confirmPasswordError && (
            <p className="confirm-password-error-message">{confirmPasswordError}</p>
          )}
        </div>
        <div className="signup-username-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={validateName}
            placeholder="이름"
            className={`signup-username-input ${nameError ? "error" : ""}`}
            required
          />
          {nameError && <p className="signup-username-error-message">{nameError}</p>}
        </div>
        <div className="signup-phone-container">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={validatePhone}
            placeholder="휴대폰 번호"
            className={`signup-phone-input ${phoneError ? "error" : ""}`}
            required
          />
          {phoneError && <p className="signup-phone-error-message">{phoneError}</p>}
      </div>

        <div className="bar"></div>

          <div className="agreement">
            <input
              type="checkbox"
              name="agree.all"
              checked={Object.values(formData.agree).every(Boolean)}
              onChange={handleAgreeAll}
            />
            모두 확인하였으며 동의합니다.
          </div>
          <div className="notification">전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며, 개별적으로 동의를 선택하
            실 수 있습니다. 선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
          </div>
        <div className="essential-list">
          <p>
            <input
              type="checkbox"
              name="agree.age"
              checked={formData.agree.age}
              onChange={handleChange}
            />
            [필수] 만 14세 이상입니다.
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.terms"
              checked={formData.agree.terms}
              onChange={handleChange}
            />
            [필수] 쿠팡 이용약관 동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.financialTerms"
              checked={formData.agree.financialTerms}
              onChange={handleChange}
            />
            [필수] 전자금융거래 이용약관 동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.privacy"
              checked={formData.agree.privacy}
              onChange={handleChange}
            />
            [필수] 개인정보 수집 및 이용 동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.thirdParty"
              checked={formData.agree.thirdParty}
              onChange={handleChange}
            />
            [필수] 개인정보 제3자 제공 동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.marketing"
              checked={formData.agree.marketing}
              onChange={handleMarketingChange}
            />
            [선택] 마케팅 목적의 개인정보 수집 및 이용 동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.ads"
              checked={formData.agree.marketing}
              onChange={handleChange}
            />
            [선택] 광고성 정보 수신 동의
          </p>
      <p className="signup-essential-list">
        <p>
            <input
              type="checkbox"
              name="agree.thirdParty"
              checked={formData.agree.marketing}
              onChange={handleChange}
            />
            [선택] 이메일 수신 동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.marketing"
              checked={formData.agree.marketing}
              onChange={handleChange}
            />
            [선택] SMS, SNS 수신동의
          </p>
          <p>
            <input
              type="checkbox"
              name="agree.ads"
              checked={formData.agree.marketing}
              onChange={handleChange}
            />
            [선택] 앱 푸시 수신 동의
          </p>
        </p>
          </div>
        <button className="agreement-signup-button" type="submit">동의하고 가입하기</button>
        <div className="sign-business-link">
          <p className="signup-customer">법인 고객이신가요?</p>
          <p className="signup-customer">사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
          <p className="signup-easy-signup">쿠팡비즈 간편가입</p>
          <p className='signup-companyname-background'>
          Coupang Corp. All rights reserved.</p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;