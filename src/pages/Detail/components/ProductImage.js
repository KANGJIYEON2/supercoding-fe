import React, { useState } from "react";
import waterMain from "../img/water-main.jpg";
import waterPack from "../img/water-pack.jpg";
import waterDetail from "../img/water-detail.jpg";

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [waterMain, waterPack, waterDetail];

  return (
    <div className="product-image-container">
      <div className="thumbnail-list">
        {images.map((img, index) => (
          <div
            key={index}
            className="thumbnail-item"
            onClick={() => setSelectedImage(index)}
          >
            <img src={img} alt={`썸네일 ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="main-image">
        <img src={images[selectedImage]} alt="메인 이미지" />
        <div className="quantity-badge">100개</div>
      </div>
    </div>
  );
};

export default ProductImage;
