import React, { useState } from 'react';
import './MainBanner.css';
import articleImage1 from './article/article1.jpg';
import articleImage2 from './article/article2.jpg';
import articleImage3 from './article/article3.jpg';
import articleImage4 from './article/article4.jpg';
import articleImage5 from './article/article5.jpg';
import articleImage6 from './article/article6.jpg';

const MainBanner = () => {
  const handleClick = (link) => {
    console.log("기사 링크:", link);
  };

  return (
    <div className="banner-container">
      <h2>정보보안 관련 기사</h2>

      <div className="article-list">
        <div className="article-item" onClick={() => handleClick("링크 주소")}>
          <img src={articleImage1} alt="기사 이미지 1" className="article-image" />
          <a href="https://m.boannews.com/html/detail.html?tab_type=1&idx=126176" className="article-link">
          신종·신기술 분야 사업, 가상자산 등 투자상품 빙자 사기 주의보 발령
          </a>
        </div>

        <div className="article-item" onClick={() => handleClick("링크 주소")}>
          <img src={articleImage2} alt="기사 이미지 2" className="article-image" />
          <a href="https://m.boannews.com/html/detail.html?tab_type=1&idx=126179" className="article-link">
          트리고나 랜섬웨어 공격자, 미믹 랜섬웨어로 MS-SQL 서버 공격
          </a>
        </div>

        <div className="article-item" onClick={() => handleClick("링크 주소")}>
          <img src={articleImage3} alt="기사 이미지 3" className="article-image" />
          <a href="https://m.boannews.com/html/detail.html?tab_type=1&idx=125259" className="article-link">
          사이버 공격의 시작은 이메일로부터 시작된다
          </a>
        </div>
      </div>

      <div className="article-list">
        <div className="article-item" onClick={() => handleClick("링크 주소")}>
          <img src={articleImage4} alt="기사 이미지 4" className="article-image" />
          <a href="https://m.boannews.com/html/detail.html?tab_type=1&idx=125966" className="article-link">
          신기술의 이점을 누리고 싶은 경영진이 기억해야 할 4가지
          </a>
        </div>

        <div className="article-item" onClick={() => handleClick("링크 주소")}>
          <img src={articleImage5} alt="기사 이미지 5" className="article-image" />
          <a href="https://m.boannews.com/html/detail.html?tab_type=1&idx=126179" className="article-link">
          새해 벽두 발생했던 가상자산 1,000억대 해킹 사건, 내부자로 화살 돌리나
          </a>
        </div>
        
        <div className="article-item" onClick={() => handleClick("링크 주소")}>
          <img src={articleImage6} alt="기사 이미지 6" className="article-image" />
          <a href="https://m.boannews.com/html/detail.html?tab_type=1&idx=126160" className="article-link">
          한국거래소, 개인정보 유출 사실은 인정... 세부 내용은 모르쇠 일관
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
