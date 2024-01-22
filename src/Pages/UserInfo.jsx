import React from 'react';

function UserInfo({ userInfo, setIsEditing }) {
  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <p>이름: {userInfo.name} - {userInfo.position}</p>
      <p>이메일: {userInfo.email}</p>
      <button onClick={handleEdit}>정보 수정-</button>
    </div>
  );
}

export default UserInfo;
