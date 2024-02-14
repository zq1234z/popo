import React, { useState, useEffect } from "react";
import MainPage from "./MainPage";
import DeleteAccount from "./DeleteAccount";
import Home from "./Home/Home";
import TreeBoard from "./board/TreeBoard";
import Logout from "./LogOut"; // 로그아웃 컴포넌트 import

function Sidebar({ setIsLoggedIn }) {
  const [page, setPage] = useState(window.location.hash || "#home");

  useEffect(() => {
    window.onhashchange = () => {
      setPage(window.location.hash);
      saveState();
    };
    const savedState = loadState();
    if(savedState) setPage(savedState);
  }, []);

  const saveState = () => {
    localStorage.setItem('page', page);
  };

  const loadState = () => {
    const savedState = localStorage.getItem('page');
    return savedState;
  };

  const renderPage = () => {
    switch(page) {
      case "#home":
        return <Home />;
      case "#userinfo":
        return <MainPage />;
      case "#deleteaccount":
        return <DeleteAccount />;
      case "#board":
        return <TreeBoard />;
      default:
        return <div>Not Found</div>;
    }
  };

  const buttonStyle = {
    border: 'none', 
    background: 'none', 
    fontSize: '20px', 
    color: 'white',
    textShadow: '2px 2px 4px #000000', 
    display: 'block',
    margin: '10px 0'
  };

  const containerStyle = {
    display: 'flex'
  };

  const navStyle = {
    width: '200px',
    marginRight: '20px'
  };

  const contentStyle = {
    flex: '1'
  };
  return (
    <div style={containerStyle}>
      <div style={navStyle}>
        <button style={buttonStyle} onClick={() => window.location.hash = '#home'}>홈</button>
        <button style={buttonStyle} onClick={() => window.location.hash = '#board'}>게시판</button>
        <button style={buttonStyle} onClick={() => window.location.hash = '#userinfo'}>내 정보</button>
        <button style={buttonStyle} onClick={() => window.location.hash = '#deleteaccount'}>회원 탈퇴</button>
        <Logout setIsLoggedIn={setIsLoggedIn} /> {/* 로그아웃 컴포넌트 추가 */}
      </div>
      <div style={contentStyle}>
        {renderPage()}
      </div>
    </div>
  );
}

export default Sidebar;
