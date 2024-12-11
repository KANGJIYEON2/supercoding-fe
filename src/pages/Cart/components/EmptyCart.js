// EmptyCart.jsx
const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart-main">장바구니에 담은 상품이 없습니다.</div>
      <div className="empty-cart-login">
        로그인을 하시면, 장바구니에 보관된 상품을 확인하실 수 있습니다.
        <button className="login-button">로그인하기</button>
      </div>
      <div className="empty-cart-suggestion">
        <p>
          각 상품에서 구매할 옵션을 선택하시고,{" "}
          <span className="highlight">구매하기</span> 버튼을 눌러 보세요!
        </p>
        <p>선택한 옵션을 모두 장바구니에 담을 수 있습니다.</p>
        <button className="recommendation-button">
          오늘의 추천 상품보기 {">"}
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
