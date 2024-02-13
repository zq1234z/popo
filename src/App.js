// App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Pages/Sidebar';
import Banner from './Com/Banner';
import PostContext from './PostContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: '게시물1', content: '내용1' },
    { id: 2, title: '게시물2', content: '내용2' },
    { id: 3, title: '게시물3', content: '내용3' },
    // ... 기타 게시물 데이터
  ]);
  const [notices, setNotices] = useState([]); // 공지사항을 관리하는 상태

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    const savedNotices = localStorage.getItem('notices');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
    if (savedNotices) {
      setNotices(JSON.parse(savedNotices));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
    localStorage.setItem('notices', JSON.stringify(notices));
  }, [posts, notices]);

  return (
    <div>
      <Banner />
      <PostContext.Provider value={{ posts, setPosts, notices, setNotices }}>
        <Sidebar setIsLoggedIn={setIsLoggedIn} />
      </PostContext.Provider>
    </div>
  );
}

export default App;
