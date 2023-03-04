import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../screens/Login/Login';
import { Start } from '../../screens/Start/Start';
import { Left } from '../Button/Left';

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  return <NativeStack.Navigator screenOptions={{headerShown: false}}>
    <NativeStack.Screen name="Start" component={Start} />
          
    <NativeStack.Screen name="Login" component={Login} options={{
          headerShown: true, // header부분 출력 true/fasle
          headerShadowVisible: false, // header밑 그림자 출력 true/false
          title: '', // headerTitle
          headerLeft: () => <Left name={'로그인'} />,
          // headerRight: () => <HeaderDelete />,
        }}/>
  </NativeStack.Navigator>;
};

export default Stack;
