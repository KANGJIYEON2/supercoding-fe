// pages/Detail/components/ProductTabs/ProductTabs.js
import React, { useState, useEffect, useRef } from "react";
import ProductDetail from "./TabContents/ProductDetail";
import ProductReview from "./TabContents/ProductReview";
import ProductInquiry from "./TabContents/ProductInquiry";
import DeliveryGuide from "./TabContents/DeliveryGuide";
import TabButton from "./TabButton";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("상품상세");
  const [isSticky, setIsSticky] = useState(false);
  const tabsRef = useRef(null);

  const tabs = [
    { id: "detail", name: "상품상세" },
    { id: "review", name: "상품평", count: "92,658" },
    { id: "inquiry", name: "상품문의" },
    { id: "delivery", name: "배송/교환/반품 안내" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const tabsRect = tabsRef.current.getBoundingClientRect();
        const parentRect =
          tabsRef.current.parentElement.getBoundingClientRect();
        setIsSticky(tabsRect.top <= 0 && parentRect.bottom > 0);

        // 현재 보이는 섹션에 따라 탭 활성화
        tabs.forEach((tab) => {
          const section = document.getElementById(`${tab.id}-section`);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveTab(tab.name);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const tab = tabs.find((t) => t.name === tabName);
    const section = document.getElementById(`${tab.id}-section`);
    if (section) {
      const offset = tabsRef.current?.offsetHeight || 0;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  return (
    <div className="product-tabs-wrapper" ref={tabsRef}>
      <div className={`tab-buttons ${isSticky ? "sticky" : ""}`}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            name={tab.name}
            count={tab.count}
            isActive={activeTab === tab.name}
            onClick={() => handleTabClick(tab.name)}
          />
        ))}
      </div>

      <div className="tab-sections">
        <div id="detail-section">
          <ProductDetail />
        </div>
        <div id="review-section">
          <ProductReview />
        </div>
        <div id="inquiry-section">
          <ProductInquiry />
        </div>
        <div id="delivery-section">
          <DeliveryGuide />
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
