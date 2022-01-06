import { userData } from '../../dummyfiles/dummyLoginInfo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SignupModalWholeBackground,
  SignupModalWrapper,
  SignupCloseButton,
  SignupModalContainer,
  SignupTitle,
  InputContainer,
  InputId,
  InputUserNickName,
  InputPW,
  InputPWCheckout,
  MoveToLoginModal
} from './SignupModalStyle';
import { Message, ErrorMessage } from '../GlobalMessage/GlobalMessage';
import { LoginThemeBtn } from '../GlobalButton/GlobalButton';

export const SignupModal = ({ handleCloseSignupModal, handleLoginModal }) => {
  const isValidId = /^[a-zA-Z0-9_-]{4,20}$/; // 소문자 + 숫자 + 언더바/하이픈 허용 4~20자리
  const isValidPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/; // 문자, 숫자 1개이상 포함, 8자리 이상
  const [userInfo, setUserInfo] = useState({ userId: '', userNickName: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [pwChecked, setpwChecked] = useState(false);

  const handleInputIdValidCheck = (e) => { // 아이디 반영
    if (!isValidId.test(e.target.value)) {
      setErrorMessage('4~20자리의 소문자+숫자 조합으로 만들어주세요(언더바/하이픈 가능');
    } else {
      setErrorMessage('');
      setUserInfo({
        userId: e.target.value,
        userNickName: userInfo.userNickName,
        password: userInfo.password
      });
    }
  };

  const handleInputUserNickName = (e) => { // 닉네임 반영
    setErrorMessage('');
    setUserInfo({
      userId: userInfo.userId,
      userNickName: e.target.value,
      password: userInfo.password
    });
  };

  const handleInputPWValidCheck = (e) => { // 비밀번호 반영
    if (!isValidPassword.test(e.target.value)) {
      setErrorMessage('8자리 이상의 문자+숫자 조합으로 만들어주세요');
    } else {
      setUserInfo({
        userId: userInfo.userId,
        userNickName: userInfo.userNickName,
        password: e.target.value
      });
    }
  };

  const handleInputPWConfirmCheck = (e) => { // 비밀번호 확인
    if (e.target.value === userInfo.password) {
      setErrorMessage('비밀번호가 일치합니다');
      setpwChecked(true);
    } else {
      setErrorMessage('비밀번호가 일치하지 않습니다');
    }
  };

  const handleSignup = () => {
    // axios.post 요청자리
    if (pwChecked) {
      userData.push(userInfo);
      handleLoginModal();
    } else {
      setErrorMessage('내용을 올바르게 입력해 주세요');
    }
  };

  return (
    <div>
      <SignupModalWholeBackground>
        <SignupModalWrapper>
          <SignupCloseButton onClick={handleCloseSignupModal}>&times;</SignupCloseButton>
          <SignupModalContainer>
            <SignupTitle>BookDam</SignupTitle>
            <InputContainer>
              <InputId onChange={handleInputIdValidCheck} />
              <InputUserNickName onChange={handleInputUserNickName} />
              <InputPW onChange={handleInputPWValidCheck} />
              <InputPWCheckout onChange={handleInputPWConfirmCheck} />
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <LoginThemeBtn onClick={handleSignup}>가입하기</LoginThemeBtn>
              <Message>아이디가 있으신가요?
                <MoveToLoginModal onClick={handleLoginModal}>로그인</MoveToLoginModal>
              </Message>
            </InputContainer>
          </SignupModalContainer>
        </SignupModalWrapper>
      </SignupModalWholeBackground>
    </div>
  );
};