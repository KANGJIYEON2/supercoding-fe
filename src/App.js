import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import Home from './Home'; 
import PhoneLogin from "./PhoneLogin";
import SellerSignup from "./seller-signup";

function App() {
  const [showTopBar, setShowTopBar] = useState(true); 

  return (
    <Router> 
      <div className="top-bar">
        <TopBar setShowTopBar={setShowTopBar} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp setShowTopBar={setShowTopBar} />} />
        <Route path="/PhoneLogin" element={<PhoneLogin />} />
        <Route path="/seller-signup" element={<SellerSignup />} />
      </Routes>
    </Router> 
  );
}

function TopBar({ setShowTopBar }) {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setShowTopBar(false);
    navigate("/signup");
  };

  const handleSellerSignupClick = () => {
    navigate("/seller-signup");
  };

  return (
    <div className="top-bar">
      <button onClick={handleSignUpClick}>회원가입</button>
      <button onClick={() => navigate("/login")}>로그인</button>
      <button onClick={handleSellerSignupClick}>판매자 가입</button>
    </div>
  );
}

export default App;
