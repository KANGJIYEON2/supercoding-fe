import React, { useState, useEffect } from "react";
import "./SideNav.css";

const SideNav = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(-1); // 기본값 -1로 설정
  const [isVisible, setIsVisible] = useState(false); // 사이드바 가시성 상태

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      let currentIndex = -1;

      // 현재 화면에 보이는 섹션 확인
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          currentIndex = index;
        }
      });

      // 4번째 섹션부터 activeIndex를 설정
      if (currentIndex >= 3) {
        setActiveIndex(currentIndex - 3); // 4번째 섹션부터 인덱스 보정
      } else {
        setActiveIndex(-1); // 4번째 섹션 이전에는 activeIndex를 초기화
      }

      // 4번째 섹션부터 사이드바 보이기
      const firstSection = sections[3]; // 4번째 섹션
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null; // 가시성이 false면 사이드바 렌더링하지 않음

  return (
    <nav className="side-nav">
      {categories.map((category, index) => (
        <a
          key={index}
          href={`#section-${index + 4}`} // 4번째 섹션부터 시작
          className={`nav-link ${activeIndex === index ? "active" : ""}`} // activeIndex를 0부터 카테고리에 매핑
        >
          {category}
        </a>
      ))}
    </nav>
  );
};

export default SideNav;
