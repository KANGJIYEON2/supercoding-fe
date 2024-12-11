// components/Detail/CompareProducts.js
import React from "react";

const CompareProducts = () => {
  const products = [
    {
      id: 1,
      image:
        "https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1066584435149605-6e4c1147-0d1f-4e4d-a4a6-a4f5f66f378f.jpg",
      name: "몬베스트 프리미엄 무라벨 생수, 24개",
      price: 13670,
      pricePerUnit: "100ml당 57원",
      rating: 4.8,
      reviewCount: 81920,
    },
    {
      id: 2,
      name: "강원평창수 무라벨 생수, 500ml, 80개",
      image:
        "https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/8920594722741-7f0d7c05-d9d6-4193-b90a-77f10b585669.jpg",
      price: 20800,
      pricePerUnit: "100ml당 52원",
      rating: 4.9,
      reviewCount: 97555,
    },
  ];

  return (
    <section className="compare-products">
      <h3 className="compare-title">함께 비교하면 좋을 상품</h3>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <div className="price-info">
                <span className="price">
                  {product.price.toLocaleString()}원
                </span>
                <span className="unit-price">({product.pricePerUnit})</span>
              </div>
              <div className="rating-info">
                <span className="stars">★★★★★</span>
                <span className="rating">{product.rating}</span>
                <span className="review-count2">
                  ({product.reviewCount.toLocaleString()})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompareProducts;
