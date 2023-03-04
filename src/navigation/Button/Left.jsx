import React from 'react'
import { BackImg, LeftContainer, Text, View } from '../../styles/index.styled'
import {useNavigation} from '@react-navigation/native';

export const Left = ({name}) => {
  const navigation = useNavigation();

  /** 뒤로가기 */
  const goBack = () => {
    navigation.goBack()
  }
  return (
    <LeftContainer>
      <View onPress={() => goBack()}>
        <BackImg source={require('../../images/icn_back.png')}/>
        <Text>{name}</Text>
      </View>
    </LeftContainer>
  )
}
