import React from "react";
import { useNavigate } from "react-router-dom";
import Section from "../../../components/Section/Section";
import dummyData from "../../../dummyData";

const CompareProducts = () => {
  const navigate = useNavigate();

  const handleCardClick = (productName) => {
    navigate(`/detail?name=${encodeURIComponent(productName)}`);
  };

  return (
    <>
      <Section
        title="함께 비교하면 좋을 상품"
        products={dummyData.products.slice(4, 9)}
        onCardClick={handleCardClick}
      />
      <Section
        title="오늘의 판매자 특가"
        subtitle="지금 이 상품이 필요하신가요?"
        products={dummyData.products.slice(4, 9)}
        onCardClick={handleCardClick}
      />
    </>
  );
};

export default CompareProducts;
