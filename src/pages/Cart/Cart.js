import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartList from "./components/CartList";
import EmptyCart from "./components/EmptyCart";
import "./Cart.style.css";

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("일반구매");
  const navigate = useNavigate();
  const [hasItems] = useState(false); // 장바구니 상품 유무 상태

  return (
    <div className="cart">
      <div className="cart-logo">
        <img
          src="https://www.coupang.jobs/images/logo.svg"
          alt="쿠팡"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="cart-container">
        <div className="cart-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            ＜ 장바구니
          </button>
          <div className="progress-steps">
            <span className="step">01 묶음선택</span>
            <span className="step active">02 장바구니</span>
            <span className="step">03 주문/결제</span>
            <span className="step">04 주문완료</span>
          </div>
        </div>
        <div className="tab-container">
          <button
            className={`tab ${activeTab === "일반구매" ? "active" : ""}`}
            onClick={() => setActiveTab("일반구매")}
          >
            일반구매(0)
          </button>
          <button
            className={`tab ${activeTab === "정기배송" ? "active" : ""}`}
            onClick={() => setActiveTab("정기배송")}
          >
            정기배송(0)
          </button>
        </div>
        {hasItems ? <CartList /> : <EmptyCart />}
      </div>
    </div>
  );
};
export default CartPage;
