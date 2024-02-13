import React from 'react';

const Logout = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    alert('성공적으로 로그아웃하였습니다.');
    window.location.reload();
  }

  const buttonStyle = {
    border: 'none', 
    background: 'none', 
    fontSize: '20px', 
    color: 'white',
    textShadow: '2px 2px 4px #000000', 
    display: 'block',
    margin: '10px 0'
  };

  return (
    <button style={buttonStyle} onClick={handleLogout}>로그아웃</button>
  );
};

export default Logout;
