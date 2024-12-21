import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartList from "./components/CartList";
import EmptyCart from "./components/EmptyCart";
import { fetchCartItems, setActiveTab } from "../../app/slices/cartSlice";
import "./Cart.style.css";
import CartSummary from "./components/CartSummary";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, activeTab } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const regularItems = items.filter((item) => !item.isSubscription);
  const subscriptionItems = items.filter((item) => item.isSubscription);

  const hasItems = items.length > 0;

  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
  };

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
          onClick={() => handleTabChange("일반구매")}
        >
          일반구매({regularItems.length})
        </button>
        <button
          className={`tab ${activeTab === "정기배송" ? "active" : ""}`}
          onClick={() => handleTabChange("정기배송")}
        >
          정기배송({subscriptionItems.length})
        </button>
      </div>
      {hasItems ? (
        <CartList
          items={activeTab === "일반구매" ? regularItems : subscriptionItems}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
