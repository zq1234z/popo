import styled from "styled-components";

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  box-shadow: 1px 3px 5px 5px gray;
  font-size: 1.2em;
  color: gray;
`;


export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none; 
  position: absolute;

  &:before {
    content: "${props => !props.src ? '프로필 이미지' : ''}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: gray;
  }
`;
