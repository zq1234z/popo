import { createContext } from 'react';

const PostContext = createContext({
  posts: [], 
  setPosts: () => {},
  notices: [], // 공지사항 상태 추가
  setNotices: () => {}, // 공지사항 상태 업데이트 함수 추가
});

export default PostContext;
