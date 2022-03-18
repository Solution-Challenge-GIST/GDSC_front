import { View, Text } from 'react-native';
import React from 'react';
import NormalButton from '../../../../components/button/NormalButton';
import Relativebutton from '../../../../components/button/RelativeButton';
import Normalinput from '../../../../components/input/NormalInputs';
import QuestionBox from '../../../../components/QuestionBox/QuestionBox';

export default function Test() {
  return (
    <View>
      <NormalButton text={'hi'}></NormalButton>
      <Relativebutton name={'용환'} relative={'you'}></Relativebutton>
      <Normalinput></Normalinput>
      <QuestionBox />
    </View>
  );
}
