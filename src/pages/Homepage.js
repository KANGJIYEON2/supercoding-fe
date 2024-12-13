import React from "react";
import Section from "../components/Section/Section";
import SideNav from "../components/SideNav";
import dummyData from "../dummyData";
import "./Home.style.css";
import CategorySection from "../components/CategorySection/CategorySection";

const HomePage = () => {
  const categories = [
    "가전디지털",
    "여성패션",
    "남성패션",
    "식품",
    "가구",
    "문구",
    "생활용품",
    "뷰티",
    "스포츠레저용품",
    "헬스건강식품",
    "출산유아동",
    "유아동패션",
    "주방용품",
    "반려동물용품",
    "완구취미",
    "자동차오토바이",
    "도서CDDVD",
    "여행",
  ];

  return (
    <div className="home-page">
      {/* 사이드 네비게이션 */}
      <SideNav categories={categories} />

      <div className="main-content">
        {/* 메인 배너 */}
        <section className="main-banner">
          <img
            src="https://cdn.pixabay.com/photo/2024/09/19/07/30/wild-horse-9057944_1280.jpg"
            alt="메인 배너"
            className="main-banner-img"
          />
        </section>

        {/* 오늘의 발견 섹션 */}
        <section className="today-discovery">
          <h2 className="section-title">오늘의 발견</h2>
          <p className="section-subtitle">
            오늘 쿠팡이 엄선한 가장 HOT한 상품!
          </p>
          <div className="discovery-grid">
            {dummyData.products.slice(0, 9).map((product, index) => (
              <div className="discovery-card" key={index}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="discovery-img"
                />
                <div className="discovery-info">
                  <h3 className="discovery-name">{product.name}</h3>
                  <button
                    className="navigate-button"
                    onClick={() =>
                      alert(`${product.name} 페이지로 이동합니다.`)
                    }
                  >
                    &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 오늘의 쇼핑제안 섹션 */}
        <Section
          title="오늘의 쇼핑제안"
          subtitle="지금 이 상품이 필요하신가요?"
          products={dummyData.products.slice(4, 9)}
        />

        {/* 오늘의 판매자 특가 섹션 */}
        <Section
          title="오늘의 판매자 특가"
          subtitle="판매자들이 제안하는 놀라운 특가!"
          products={dummyData.products.slice(8, 13)}
        />

        {/* 글로벌 특가 섹션 */}
        <Section
          title="전세계 핫딜 로켓직구 글로벌 특가"
          subtitle="글로벌 트렌드 상품을 만나보세요."
          products={dummyData.products.slice(12, 17)}
        />

        {/* 카테고리별 섹션 */}
        {categories.map((category, index) => (
          <div key={index} id={`section-${index + 4}`} className="section">
            <CategorySection
              categoryName={category}
              hotKeywords={["#태블릿PC", "#노트북", "#스마트워치", "#헤드셋"]}
              products={dummyData.products.slice(0, 9)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
