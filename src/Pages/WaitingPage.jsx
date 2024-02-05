import React, { useEffect, useState } from 'react';
import './WaitingPage.css';

const WaitingPage = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="waiting-page">
      <h2>인증 대기 중...</h2>
      <p>인증번호를 확인해주세요. 남은 시간: {countdown}초</p>
    </div>
  );
};

export default WaitingPage;
