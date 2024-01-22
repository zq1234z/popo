// Banner.jsx
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const BannerContainer = styled.div`
  width: 100%;
  height: 180px;
  background: url('https://cdn.pixabay.com/photo/2016/03/07/10/32/color-1241879_1280.jpg') no-repeat center center; 
  // 임시 이미지를 사용합니다. 원하는 이미지 URL로 변경하실 수 있습니다
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled.h1`
  color: white;
  font-size: 2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // 텍스트에 그림자를 추가하여 가독성을 높입니다.
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerText><Navigation /></BannerText>
    </BannerContainer>
  );
}

export default Banner;
