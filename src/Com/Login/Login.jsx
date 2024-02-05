import React, { useState } from 'react';
import './Login.css';
import { Profile } from '../../Proflie/UserProFileStyle';
import SignUpModal from '../../Pages/SignUp';
import FindIdModal from '../../Pages/FindId/FindID';
import FindPasswordModal from '../../Pages/FindPass';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showFindIdModal, setShowFindIdModal] = useState(false);
  const [showFindPasswordModal, setShowFindPasswordModal] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (!id || !password) {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    if (id === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setErrorMessage('');
      setUser({
        name: '홍길동',
        profileImage: '/path/to/profile/image',
      });
    } else {
      setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleOpenSignUpModal = () => {
    setShowSignUpModal(true);
    setShowFindIdModal(false);
    setShowFindPasswordModal(false);
  };

  const handleCloseSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const handleOpenFindIdModal = () => {
    setShowSignUpModal(false);
    setShowFindIdModal(true);
    setShowFindPasswordModal(false);
  };
  

  const handleCloseFindIdModal = () => {
    setShowFindIdModal(false);
  };

  const handleOpenFindPasswordModal = () => {
    setShowSignUpModal(false);
    setShowFindIdModal(false);
    setShowFindPasswordModal(true);
  };

  const handleCloseFindPasswordModal = () => {
    setShowFindPasswordModal(false);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <Profile style={{backgroundImage: `url(${user.profileImage})`}} />
          <div>환영합니다, {user.name}님!</div>
        </div>
      ) : (
        (!showSignUpModal && !showFindIdModal && !showFindPasswordModal) && // 모든 모달이 닫혀있을 때만 로그인 페이지를 보여줍니다.
        <form onSubmit={handleLogin} className="login-form">
          <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} className="login-input" />
          <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
          <button type="submit" className="login-button">로그인</button>
        </form>
      )}
      {errorMessage && <div className="login-error">{errorMessage}</div>}
      <div className="login-links">
        <button onClick={handleOpenSignUpModal} className="signup-link">회원가입</button>
        <button onClick={handleOpenFindIdModal} className="find-id-link">아이디 찾기</button>
        <button onClick={handleOpenFindPasswordModal} className="find-password-link">비밀번호 찾기</button>
      </div>
      {showSignUpModal && <SignUpModal onClose={handleCloseSignUpModal} />}
      {showFindIdModal && <FindIdModal onClose={handleCloseFindIdModal} />}
      {showFindPasswordModal && <FindPasswordModal onClose={handleCloseFindPasswordModal} />}
    </div>
  );
};

export default Login;
