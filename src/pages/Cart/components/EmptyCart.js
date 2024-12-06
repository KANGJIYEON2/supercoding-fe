const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <p className="empty-message">장바구니에 담은 상품이 없습니다.</p>
      <div className="login-hint">
        로그인을 하시면, 장바구니에 보관된 상품을 확인하실 수 있습니다.
        <button className="login-button">로그인하기</button>
      </div>
      <div className="recommend-section">
        <p className="recommend-text">
          각 상품에서 구매할 옵션을 선택하시고, 구매하기 버튼을 눌러 보세요!
          <br />
          선택한 옵션을 모두 장바구니에 담을 수 있습니다.
        </p>
        <button className="recommend-button">오늘의 추천 상품보기 ＞</button>
      </div>
    </div>
  );
};

export default EmptyCart;
