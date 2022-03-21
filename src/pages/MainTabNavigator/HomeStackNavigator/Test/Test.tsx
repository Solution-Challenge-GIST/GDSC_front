import { View, Text } from 'react-native';
import React from 'react';
import NormalButton from '../../../../components/button/NormalButton';
import Relativebutton from '../../../../components/button/RelativeButton';
import Normalinput from '../../../../components/input/NormalInputs';
import QuestionBox from '../../../../components/QuestionBox/QuestionBox';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Test() {
  return (
    <SafeAreaView>
      <Normalinput></Normalinput>
      <QuestionBox payload="내 자식이 한 일 중에 가장 기뻤던 일은?" />
    </SafeAreaView>
  );
}
