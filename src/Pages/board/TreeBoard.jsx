// TreeBoard.js 파일

import React, { useState, useEffect } from 'react';
import GameDepartment from '../../GameDepartment'; // 게임계열 게시판 컴포넌트
import DesignDepartment from '../../DesignDepartment'; // 디자인 디지털 계열 게시판 컴포넌트
import ITDepartment from '../../ITDepartment'; // IT융합계열 게시판 컴포넌트
import axios from 'axios';

const TreeBoard = () => {
  const [userDepartment, setUserDepartment] = useState(null); // 사용자의 학과 정보를 useState로 관리

  useEffect(() => {
    // 로그인 후 사용자의 학과 정보를 API를 통해 가져옵니다.
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('/api/userinfo'); // 사용자 정보를 요청하는 API 경로입니다. 실제 프로젝트에서는 여러분의 백엔드 시스템에 맞는 API를 사용해야 합니다.
        setUserDepartment(response.data.department); // API 응답에서 학과 정보를 가져와 state를 업데이트합니다.
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const renderDepartmentBoard = () => {
    if (userDepartment === 'game') {
      return <GameDepartment />;
    }
    if (userDepartment === 'design') {
      return <DesignDepartment />;
    }
    if (userDepartment === 'it') {
      return <ITDepartment />;
    }
    return <div>해당 학과의 게시판만 확인할 수 있습니다.</div>;
  };

  return (
    <div>
      <h1>게시판</h1>
      {renderDepartmentBoard()} {/* 사용자의 학과에 따른 게시판을 보여줍니다. */}
    </div>
  );
};

export default TreeBoard;