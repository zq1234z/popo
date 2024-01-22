import React, { useState } from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  display: block;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
`;

function DeleteAccount({ userInfo, setUserInfo }) {
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDelete = () => {
    if(userInfo.password === password) {
      alert('회원 탈퇴가 완료되었습니다.');
      setUserInfo({}); // 회원 정보 초기화
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div>
      <label>
        비밀번호 확인:
        <InputField type="password" name="password" value={password} onChange={handleInputChange} />
        (회원 탈퇴를 위해 비밀번호를 한번 더 입력해주세요)
      </label>
      <Button onClick={handleDelete}>회원 탈퇴</Button>
    </div>
  );
}

export default DeleteAccount;
