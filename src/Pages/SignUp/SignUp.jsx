import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const PasswordInput = ({ password, setPassword }) => {
  const [passwordError, setPasswordError] = useState(null);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 유효성 검사
    if (newPassword.length < 8) {
      setPasswordError('비밀번호는 8자 이상이어야 합니다.');
    } else if (newPassword.length > 16) {
      setPasswordError('비밀번호는 16자 이내이어야 합니다.');
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
      setPasswordError('특수문자를 포함 해 주세요');
    } else {
      setPasswordError(null); // 유효성 검사를 통과하면 에러 메시지 제거
    }
  };

  const handleCloseError = () => {
    setPasswordError(null);
  };

  return (
    <div>
      <label style={{ marginBottom: '10px' }}>
        비밀번호 :
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {passwordError && (
        <div style={{ marginBottom: '10px' }}>
          <p style={{ color: 'red', marginBottom: '5px' }}>{passwordError}</p>
          <button onClick={handleCloseError} style={{ cursor: 'pointer' }}>
            닫기
          </button>
        </div>
      )}
    </div>
  );
};


const SignUpForm = () => {
  // State 설정
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentId, setStudentId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [autoLogout, setAutoLogout] = useState(false);
  const [logoutTime, setLogoutTime] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState(true); // 추가된 부분

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isIdAvailable) {
      alert('아이디가 이미 사용 중입니다.');
      return;
    }
  
    try {
      const response = await axios.post('API_URL', {
        firstName,
        lastName,
        email,
        password,
        studentId,
        phoneNumber,
        autoLogout,
        logoutTime,
      });
      console.log('회원가입 정보:', response.data);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  // 아이디 중복 확인 핸들러
  const handleIdCheck = async () => {
    // 여기에서는 간단히 아이디가 비어있지 않으면 중복 확인되었다고 가정
    if (firstName.trim() !== '') {
      // 실제 서버와 통신하는 로직이 필요
      // 여기에서는 간단히 아이디가 비어있지 않으면 중복 확인되었다고 가정
      setIsIdAvailable(false);
    }
  };

  // 이메일 입력 체크 핸들러
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (!inputEmail.includes('@')) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // 전화번호 입력 체크 핸들러
  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    setPhoneNumber(inputPhoneNumber);
    if (!/^\d{3}-\d{4}-\d{4}$/.test(inputPhoneNumber)) {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  };

// 로그아웃 시간 체크박스 핸들러
const handleLogoutTimeChange = (index) => {
  const newLogoutTime = [...logoutTime];
  newLogoutTime[index] = !newLogoutTime[index];

  // If the current checkbox is being checked, uncheck all other checkboxes
  if (newLogoutTime[index]) {
    for (let i = 0; i < newLogoutTime.length; i++) {
      if (i !== index) {
        newLogoutTime[i] = false;
      }
    }
  }

  setLogoutTime(newLogoutTime);
};


  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h2 className="form-title">회원가입</h2>
        <label className="form-label">
          아이디 :
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <PasswordInput password={password} setPassword={setPassword} />
        <br />
        <label style={{ marginBottom: '10px' }}>
          이메일 :
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        {emailError && <p style={{ color: 'red', marginBottom: '10px' }}>@를 포함하여 작성해 주세요</p>}
        <br />
        <label style={{ marginBottom: '10px' }}>
          이름 :
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label style={{ marginBottom: '10px' }}>
          학번 :
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>
        <br />
        <label style={{ marginBottom: '10px' }}>
          전화번호 :
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="  xxx-xxxx-xxxx"
          />
        </label>
        {phoneNumberError && (
          <p style={{ color: 'red', marginBottom: '10px' }}>전화번호는 숫자와 "-"를 포함하여 입력해 주세요</p>
        )}
        <br />
        {/* 부재시 로그아웃 문구 추가 */}
        <div style={{ marginBottom: '10px', textAlign: 'center', fontStyle: 'italic' }}>
          <b>부재시 재인증 시간 설정</b>
        </div>
        {/* 박스 */}
<div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <div style={{ marginRight: '10px' }}>
    <label>
      <input
        type="checkbox"
        checked={autoLogout}
        onChange={(e) => setAutoLogout(e.target.checked)}
      />
      30분
    </label>
  </div>
  {['1시간', '2시간', '3시간'].map((time, index) => (
    <div key={index} style={{ marginRight: '10px' }}>
      <label>
        <input
          type="checkbox"
          checked={logoutTime[index]}
          onChange={() => handleLogoutTimeChange(index)}
        />
        {time}
      </label>
    </div>
  ))}
  </div>
        <button
          type="submit"
          style={{
            background: 'blue',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          가입하기
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
