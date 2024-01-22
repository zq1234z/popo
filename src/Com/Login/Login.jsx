import React, { useState } from 'react';
import './Login.css';
import { Profile } from '../../Proflie/UserProFileStyle';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null); // 사용자 정보를 관리하는 상태

  const handleLogin = (event) => {
    event.preventDefault();

    if (!id || !password) {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (id === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setErrorMessage('');
      setUser({ // 로그인에 성공하면 user 상태를 갱신
        name: '홍길동',
        profileImage: '/path/to/profile/image', // 실제 프로필 이미지 경로로 변경해야 함
        // ... 기타 사용자 정보
      });
    } else {
      setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <Profile style={{backgroundImage: `url(${user.profileImage})`}} /> {/* 프로필 사진 */}
          <div>환영합니다, {user.name}님!</div> {/* 회원 이름 */}
          {/* ... 기타 사용자 정보 */}
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} className="login-input" />
          <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
          <button type="submit" className="login-button">로그인</button>
        </form>
      )}
      {errorMessage && <div className="login-error">{errorMessage}</div>}
      <div className="login-links">
        <a href="#signup" className="signup-link">회원가입</a>
        <a href="#find-id" className="find-id-link">아이디 찾기</a>
        <a href="#find-password" className="find-password-link">비밀번호 찾기</a>
      </div>
    </div>
  );
};

export default Login;
