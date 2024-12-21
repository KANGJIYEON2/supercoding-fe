import React from 'react';
import "./seller-signup.css"

function SellerSignup() {
  return (
    <div className='sellersignup-topbar'>
      <div className='sellersignup-logo'></div>
      <button type="submit" className="sellersignup-login-btn">로그인</button>
      <div className='sellersignup-menu'>
        <button>처음 시작하나요?</button>
        <button>입접안내</button>
        <button>쿠팡 MBA</button>
        <button>판매자 스토리</button>
        <button>로켓그로스</button>
      </div>
    </div>
  )
}

export default SellerSignup;