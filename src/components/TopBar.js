import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./TopBar.css";

const TopBar = () => {
  const [showTopBar, setShowTopBar] = useState(true); // 초기 상태를 true로 설정

  const handleLoginClick = () => {
    setShowTopBar(false); // 로그인 클릭 시 TopBar 숨기기
  };

  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    showTopBar && ( // showTopBar가 true일 때만 렌더링
      <div className="top-bar">
        <div className="topbar-left">
          <Link to="/"><button>즐겨찾기</button></Link>
          <Link to="/"><button>입점신청</button></Link>
        </div>
        <div className="topbar-right">
          <Link to="/login">
            <button onClick={handleLoginClick}>로그인</button>
          </Link>
          <Link to="/signup">
            <button onClick={handleSignUpClick}>회원가입</button>
          </Link>
          <Link to="/customer-service"><button>고객센터</button></Link>
          <Link to="/seller-signup"><button>판매자 가입</button></Link>
        </div>
      </div>
    )
  );
};

export default TopBar;