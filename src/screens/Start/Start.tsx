import React from 'react';
import {
  BtmView,
  Container,
  Logo,
  Main,
  NextBtn,
  NextText,
  Signup,
  SignupText,
  SignUpView,
  Title,
} from '../../styles/index.styled';
import {useNavigation} from '@react-navigation/native';

export const Start = () => {
  const navigation = useNavigation();
  /** 로그인 페이지로 이동 */
  const goLogin = () => {
    navigation.navigate('Stack', {screen: 'Login'});
  };
  return (
    <Container>
      <Main>
        <Logo />
        <Title>서비스 이름</Title>
      </Main>
      <BtmView>
        <NextBtn onPress={() => goLogin()}>
          <NextText>시작하기</NextText>
        </NextBtn>
        <SignUpView>
          <SignupText>
            계정이 없으신가요?{'  '}
            <Signup>회원가입</Signup>
          </SignupText>
        </SignUpView>
      </BtmView>
    </Container>
  );
};
