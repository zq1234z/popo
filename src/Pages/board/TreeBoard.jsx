import React, { useState, useEffect } from 'react';
import GameDepartment from '../../GameDepartment'; // 게임계열 게시판 컴포넌트
import DesignDepartment from '../../DesignDepartment'; // 디자인 디지털 계열 게시판 컴포넌트
import ITDepartment from '../../ITDepartment'; // IT융합계열 게시판 컴포넌트
import axios from 'axios';

const TreeBoard = () => {
  const [userDepartment, setUserDepartment] = useState(null); // 사용자의 학과 정보를 useState로 관리
  const [selectedDepartment, setSelectedDepartment] = useState(null); // 선택된 학과 정보를 useState로 관리

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

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
  };

  const renderDepartmentBoard = () => {
    if (selectedDepartment === 'game') {
      return <GameDepartment />;
    }
    if (selectedDepartment === 'design') {
      return <DesignDepartment />;
    }
    if (selectedDepartment === 'it') {
      return <ITDepartment />;
    }
  };

  return (
    <div>
      <h1>게시판</h1>
      <div>
        <button onClick={() => handleDepartmentSelect('game')}>게임계열</button>
        <button onClick={() => handleDepartmentSelect('design')}>디자인 디지털 계열</button>
        <button onClick={() => handleDepartmentSelect('it')}>IT융합계열</button>
      </div>
      {selectedDepartment ? renderDepartmentBoard() : <div>학과를 선택해주세요.</div>}
    </div>
  );
};

export default TreeBoard;
