import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Main = styled.View`
  top: -100px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.View`
  width: 177px;
  height: 177px;
  background-color: #6ace8e;
  border-radius: 100;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.Text`
  margin-top: 18px;
  font-size: 20px;
  font-weight: 700;
  color: '#191F29';
`;

export const BtmView = styled.View`
  padding: 0 20px;
  width: 100%;
  position: absolute;
  bottom: 34px;
`;

export const NextBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 0;
  background-color: #6ace8e;
  border-radius: 5px;
`;

export const NextText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;

export const SignupText = styled.Text`
  margin-top: 17px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #191f29;
`;

export const SignUpView = styled.TouchableOpacity``;

export const Signup = styled.Text`
  margin-left: 30px;
  font-size: 12px;
  font-weight: 700;
  color: #6ace8e;
`;

// Login
export const LoginContainer = styled.SafeAreaView`
  flex: 1;
  padding: 30px 20px;
  background-color: #fff;
`;

export const InputlView = styled.View`
  width: 100%;
  flex-direction: row;
  border-radius: 8px;
  background-color: #f6f6f6;
`;

export const EmailInput = styled.TextInput`
  width: 80%;
`;

export const PwInput = styled.TextInput`
  width: 80%;
`;

// Left
export const LeftContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const View = styled.TouchableOpacity`
  margin-left: 15px;
  margin: 20px 0;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  margin-left: 6;
  font-size: 18px;
  color: #222;
`;

export const BackImg = styled.Image`
  width: 24px;
  height: 24px;
`;
