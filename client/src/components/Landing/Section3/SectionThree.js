import React from 'react';
import { Link } from 'react-router-dom';
import {
  SectionContainer,
  ImageContainer,
  ImageAnimation1,
  ImageAnimation2,
  ImageAnimation3,
  ImageAnimation4,
  ImageAnimation5,
  ImageAnimation6,
  ImageAnimation7,
  TextAndButtonContainer,
  TextAndSpan,
  TextContainer,
  SectionThreeText,
  SectionThreeTextDiv,
  ButtonContainer,
  ButtonsInIntro,
  ButtonSubContainer,
  TakeTourButtonImage,
  LoginButtonImage 
} from './SectionThreeStyle';

export const Section3 = ({ isLogin, guestLoginHandelr, handleLoginModal }) => {

  return (
    <>
      <SectionContainer>{/* SectionInfo3 */}
          <ImageContainer>
            <ImageAnimation1 />
            <ImageAnimation2 />
            <ImageAnimation3 />
            <ImageAnimation4 />
            <ImageAnimation5 />
            <ImageAnimation6 />
            <ImageAnimation7 />
          </ImageContainer>
          <TextAndButtonContainer>
          <TextContainer>
            <SectionThreeText>인생을 바꾸는 의미있는 작은 변화,</SectionThreeText><br />
            <SectionThreeText>오늘부터 북담을 시작해볼까요?</SectionThreeText>
          </TextContainer>
            <ButtonContainer>
              <Link to='/feedpage'>
                {isLogin
                  ? <ButtonsInIntro>
                      <ButtonSubContainer>
                        <LoginButtonImage />입장하기
                      </ButtonSubContainer>
                    </ButtonsInIntro>
                  : <ButtonsInIntro onClick={guestLoginHandelr}>
                      <ButtonSubContainer>
                      <TakeTourButtonImage />둘러보기
                    </ButtonSubContainer>
                  </ButtonsInIntro>}
              </Link>
              {isLogin
                ? null
                : <ButtonsInIntro onClick={handleLoginModal}>
                    <ButtonSubContainer>
                      <LoginButtonImage />로그인
                    </ButtonSubContainer>
                  </ButtonsInIntro>}
            </ButtonContainer>
          </TextAndButtonContainer>
      </SectionContainer>
    </>
  );
};
