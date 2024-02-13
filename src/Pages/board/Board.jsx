import React, { useState, useContext } from 'react';
import './Board.css'; 
import PostContext from '../../PostContext';
import eventBus from '../../eventBus';

const Board = () => {
  const { posts, setPosts, notices, setNotices } = useContext(PostContext);

  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: null 
  });

  const handleFileChange = e => {
    setNewPost({
      ...newPost,
      image: e.target.files[0] // 첫 번째 파일을 이미지 상태로 설정
    });
  };

  // 공지사항 관련 상태 변수 추가
  const [isCreatingNotice, setIsCreatingNotice] = useState(false);
  const [newNotice, setNewNotice] = useState({
    title: '',
    content: ''
  });

  const handleNewPost = () => {
    setIsCreatingPost(true);
  };

  // 공지사항 작성 버튼 핸들러 함수
  const handleNewNotice = () => {
    setIsCreatingNotice(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  // 공지사항 입력 핸들러 함수
  const handleNoticeChange = e => {
    const { name, value } = e.target;
    setNewNotice({
      ...newNotice,
      [name]: value
    });
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const id = posts.length + 1;
    const post = { id, ...newPost, createdAt: new Date() };
    
    setPosts(prevPosts => {
      const updatedPosts = [...prevPosts, post];
      eventBus.emit('newPost', post);
      return updatedPosts;
    });
    
    setIsCreatingPost(false);
  };
  
  // 공지사항 삭제 함수
  const deleteNotice = id => {
  setNotices(notices.filter(notice => notice.id !== id));
};

  // 공지사항 제출 핸들러 함수
  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    const id = notices.length + 1;
    const notice = { id, ...newNotice, createdAt: new Date() };
    
    // notices 리스트에 공지사항 추가
    setNotices(prevNotices => [...prevNotices, notice]);
    
    setIsCreatingNotice(false);
  };
  
  const formatCreatedAt = createdAt => {
    const date = new Date(createdAt);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  };
  // 게시물 삭제 함수
  const deletePost = id => {
  setPosts(posts.filter(post => post.id !== id));
};

  return (
    <div className="board-container">
      <h1 className="board-title">게시판</h1>
      <div className="button-container">
        {!isCreatingPost && !isCreatingNotice ? (
          <>
            <button onClick={handleNewPost} className="new-post-btn">게시글 작성</button>
            <button onClick={handleNewNotice} className="new-notice-btn">공지사항 작성</button>
          </>
        ) : isCreatingPost ? (
          <div className="post-form-container">
            <form onSubmit={handlePostSubmit} className="post-form">
                <label className="form-label">
                    제목:
                    <input type="text" name="title" value={newPost.title} onChange={handleChange} className="form-input" />
                </label>
                <label className="form-label">
                    내용:
                    <textarea name="content" value={newPost.content} onChange={handleChange} className="form-textarea" />
                </label>
                <label className="form-label">
                    사진:
                    <input type="file" onChange={handleFileChange} className="form-input" />
                  </label>
                <button type="submit" className="form-submit">게시글 작성</button>
            </form>

            <button onClick={() => setIsCreatingPost(false)} className="cancel-btn">취소</button>
          </div>
        ) : (
          <div className="notice-form-container">
            <form onSubmit={handleNoticeSubmit} className="notice-form">
              <label className="form-label">
                제목:
                <input type="text" name="title" value={newNotice.title} onChange={handleNoticeChange} className="form-input" />
              </label>
              <label className="form-label">
                내용:
                <textarea name="content" value={newNotice.content} onChange={handleNoticeChange} className="form-textarea" />
              </label>
              <button type="submit" className="form-submit">공지사항 작성</button>
            </form>
            <button onClick={() => setIsCreatingNotice(false)} className="cancel-btn">취소</button>
          </div>
        )}
    </div>
          <div className="post-list">
        <ul className="post-ul">
        {posts.map(post => (
          <li key={post.id} className="post-li">
            <div className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <p className="post-date">작성 시간: {formatCreatedAt(post.createdAt)}</p>
              <button onClick={() => deletePost(post.id)}>삭제</button>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Board;
