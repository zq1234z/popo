
import React, { useState } from 'react';


const FindIdComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [emailError, setEmailError] = useState('');

  const handleSendVerification = () => {
    if (isValidEmail(email)) {
      setResult(`이메일 인증 메일을 발송했습니다. 확인해주세요.`);
    } else {
      setEmailError('이메일을 올바르게 입력해주세요.');
    }
  };

  const handleNext = () => {
    setResult(null); // 결과 메시지 초기화
    setEmailError(''); // 에러 메시지 초기화
  };

  const isValidEmail = (email) => {
    return email.includes('@');
  };

  return (
    <div className="find-id-container">
      <div className="find-id-text">비밀번호 찾기</div>
      <div className="big-box">
        <form>
          <div className="input-button-wrapper">
            <label>
              이름
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>
          <div className="input-button-wrapper">
            <label>
              이메일
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
              />
            </label>
            {emailError && <p className="error-message">{emailError}</p>}
            <button type="button" onClick={handleSendVerification}>
              인증 메일 받기
            </button>
          </div>
        </form>
        {result && <p>{result}</p>}
      </div>
      <button className="next-button" type="button" onClick={handleNext}>
        다음
      </button>
    </div>
  );
};

export default FindIdComponent;