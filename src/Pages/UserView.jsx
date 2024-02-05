// UserView.js
import React from 'react';
import { ProfileImage,ProfileImageContainer } from '../Proflie/ProfileImage';

function UserView({ userInfo, setIsEditing }) {
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <ProfileImageContainer>
        <ProfileImage src={userInfo.profileImage || ""}  />
      </ProfileImageContainer>
      <p>이름: "{userInfo.name}" {userInfo.position}</p>
      <p>이메일: {userInfo.email}</p>
      <button onClick={handleEdit}>편집</button>
    </div>
  );
}

export default UserView;
