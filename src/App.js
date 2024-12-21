import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import SignUp from "./SignUp";
import Home from './Home'; 

const App = () => {
  const [showTopBar, setShowTopBar] = useState(true); 
  const navigate = useNavigate(); 


  const handleSignUpClick = () => {
    setShowTopBar(false); 
    navigate("/signup");
  };

  return (
    <Router>
      {showTopBar && (
        <div className="top-bar">
          <button onClick={handleSignUpClick}>회원가입</button>
          <button onClick={() => navigate("/login")}>로그인</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={<SignUp setShowTopBar={setShowTopBar} />}
        />
        <Route
          path="/login"
          element={<Login setShowTopBar={setShowTopBar} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
