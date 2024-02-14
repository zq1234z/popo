import React from 'react';

const Logout = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    const message = isLoggedIn ? '성공적으로 로그아웃하였습니다.' : '로그인을 진행해주세요.';
    alert(message);
    window.location.reload();
  };

  const buttonStyle = {
    border: 'none',
    background: 'none',
    fontSize: '20px',
    color: 'blue',
    textShadow: '2px 2px 4px #000000',
    display: 'block',
    margin: '10px 0'
  };

  return (
    <button style={buttonStyle} onClick={handleLogout}>
      로그아웃
    </button>
  );
};

export default Logout;
