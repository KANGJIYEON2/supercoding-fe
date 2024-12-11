import React, { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const CartList = () => {
  const [items] = useState([
    {
      id: 1,
      name: "타모애 시그니처 난방텐트 1~2인용",
      price: 92900,
      image: "/images/tent.jpg",
      quantity: 1,
    },
  ]);

  return (
    <div className="cart-content">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary items={items} />
    </div>
  );
};

export default CartList;
