const CartSummary = ({ items }) => {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="price-summary">
      <div className="summary-item">
        <span>총 상품 가격</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
      <div className="summary-item">
        <span>총 할인</span>
        <span>0원</span>
      </div>
      <div className="summary-total">
        <span>총 결제금액</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
      <button className="purchase-button">구매하기 ({items.length})</button>
    </div>
  );
};

export default CartSummary;
