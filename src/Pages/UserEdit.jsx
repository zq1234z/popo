import React, { useRef } from "react";
import { ProfileImage, ProfileImageContainer } from "../Proflie/ProfileImage";
import {ImageContainer,FileInput,InputField,RadioInput,BirthDateInput,GenderInput} from '../Com/Input';
import axios from 'axios';

function UserEdit({ userInfo, setUserInfo, setIsEditing }) {
  const handleInputChange = (event) => {

  const { name, value } = event.target;
  setUserInfo({ ...userInfo, [name]: value });
  };

  const [passwordCheck, setPasswordCheck] = React.useState({
    firstInput: "",
    secondInput: ""
  });

  

  const handlePasswordCheck = (event) => {
    const { name, value } = event.target;
    setPasswordCheck({ ...passwordCheck, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({ ...userInfo, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRadioChange = (event) => {
    setUserInfo({ ...userInfo, position: event.target.value });
    };
    
  
    const handleSave = async () => {
      // 비밀번호 확인 과정을 추가합니다
      if (passwordCheck.firstInput !== passwordCheck.secondInput) {
        alert("입력하신 비밀번호가 일치하지 않습니다");
        return;
      }
    
      // 특수문자 검증을 추가합니다
      const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (!regex.test(passwordCheck.firstInput)) {
        alert("비밀번호에는 특수문자가 포함되어야 합니다");
        return;
      }
    
      // 사용자 정보를 업데이트하는 API 호출을 추가합니다.
      try {
        const response = await axios.put('/api/userinfo', {
          ...userInfo,
          password: passwordCheck.firstInput, // 비밀번호는 passwordCheck.firstInput에서 가져옵니다
        });
        console.log('User info updated:', response.data);
      } catch (error) {
        console.error('Failed to update user info:', error);
      }
    
      setIsEditing(false);
    };
  
  

  return (
    <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <ImageContainer>
      <ProfileImageContainer>
        <ProfileImage src={userInfo.profileImage} alt="" />
        <FileInput type="file" accept="image/*" onChange={handleImageChange} />
      </ProfileImageContainer>
      </ImageContainer>
      <label>
        이름:
        <InputField type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
      </label>
      <label>
        이메일:
        <InputField type="text" name="email" value={userInfo.email} onChange={handleInputChange} />
      </label>
      <label>
        생년월일:
        <BirthDateInput type="date" name="birthDate" value={userInfo.birthDate} onChange={handleInputChange} />
      </label>
      <label>
        성별:
        <GenderInput name="gender" value={userInfo.gender} onChange={handleInputChange}>
          <option value="">선택하세요</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </GenderInput>
      </label>
      <label>
        변경할 비밀번호:
        <InputField type="password" name="firstInput" value={passwordCheck.firstInput} onChange={handlePasswordCheck} />
      </label>
      <label>
        비밀번호 확인:
        <InputField type="password" name="secondInput" value={passwordCheck.secondInput} onChange={handlePasswordCheck} />
      </label>
      <label>
        학번:
        <InputField type="number" name="studentNumber" value={userInfo.studentNumber} maxLength="8" onChange={handleInputChange} />
      </label>

      <label>
        전화번호:
        <InputField type="number" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleInputChange} />
      </label><br />
      <label>
        학과:
        <select name="department" value={userInfo.department} onChange={handleInputChange}>
          <option value="">선택하세요</option>
          <option value="game">게임계열</option>
          <option value="design">디자인 디지털 계열</option>
          <option value="it">IT융합계열</option>
        </select>
      </label><br /><br />
      <label>
        <RadioInput type="radio" value="졸업생" checked={userInfo.position === '졸업생'} onChange={handleRadioChange} />
        졸업생
      </label>
      <label>
        <RadioInput type="radio" value="재학생" checked={userInfo.position === '재학생'} onChange={handleRadioChange} />
        재학생
      </label>
      <label>
        <RadioInput type="radio" value="교수님" checked={userInfo.position === '교수님'} onChange={handleRadioChange} />
        교수님
      </label>
      <br /><br />
      <button onClick={handleSave}>저장</button>
    </div>
  );
}

export default UserEdit;
