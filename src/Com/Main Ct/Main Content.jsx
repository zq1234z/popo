import React, { useState, useEffect,useContext } from 'react';
import './MainContent.css';
import eventBus from '../../eventBus';
import PostContext from '../../PostContext';

const MainContent = ({ isLoggedIn }) => {
  const [posts, setPosts] = useState([]);

  const { notices } = useContext(PostContext);
  
  useEffect(() => {
    const handleNewPost = (newPost) => {
      setPosts(prevPosts => [...prevPosts, newPost]);
    };

    eventBus.on('newPost', handleNewPost); // 새 게시물 이벤트를 구독합니다.

    // 컴포넌트가 unmount될 때 구독을 해제합니다.
    return () => {
      eventBus.off('newPost', handleNewPost);
    };
  }, []);

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
        <h2>공지사항</h2>
        {notices.map(notice => ( // 공지사항 출력
          <div key={notice.id} className="post-item">
            <h3>{notice.title}</h3>
            <div>{notice.content}</div>
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
