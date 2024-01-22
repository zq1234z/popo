import React, { useState } from 'react';
import './MainContent.css'; 

const MainContent = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: '게시물1', content: '내용1' },
    { id: 2, title: '게시물2', content: '내용2' },
    { id: 3, title: '게시물3', content: '내용3' },
    // ... 기타 게시물 데이터
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    if (isLoggedIn) {
      setSelectedPost(post);
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <main className="main-content">
      <section className="board-section">
        <h2>게시판</h2>
        {posts.map(post => (
          <div key={post.id} className="post-item" onClick={() => handlePostClick(post)}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </section>
      {selectedPost && (
        <section className="post-detail-section">
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={handleBackClick}>뒤로 가기</button>
        </section>
      )}
    </main>
  );
};

export default MainContent;
