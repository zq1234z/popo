// MyPage.jsx
import React, { useState } from 'react';
import UserView from './UserView';
import UserEdit from './UserEdit';

function MainPage() {
  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    email: 'hong@gmail.com',
    profileImage: '', // 프로필 이미지 URL을 저장할 속성
    position: '', // 사용자의 직위를 저장할 속성
  });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1>마이 페이지</h1>
      {isEditing ? (
        <UserEdit userInfo={userInfo} setUserInfo={setUserInfo} setIsEditing={setIsEditing} />
      ) : (
        <UserView userInfo={userInfo} setIsEditing={setIsEditing} />
      )}
    </div>
  );
}

export default MainPage;
