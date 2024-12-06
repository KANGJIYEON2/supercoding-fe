import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantity = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="cart-item">
      <input type="checkbox" className="item-checkbox" />
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price.toLocaleString()}원</div>
        <div className="quantity-control">
          <button onClick={() => handleQuantity("decrease")}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={() => handleQuantity("increase")}>+</button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
