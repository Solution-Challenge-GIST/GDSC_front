import { View, Text } from 'react-native';
import React from 'react';
import { Date } from '../../type';
import { juniorDateLineStyles } from './style';

const SeperateBar = () => {
  return <View style={juniorDateLineStyles.seperateBar} />;
};

export default function JuniorDateLine(props: Date) {
  const { year, month, day, weekday } = props;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <SeperateBar />
      <Text style={juniorDateLineStyles.text}>
        {`${year}년 ${month}월 ${day}일 ${weekday}`}
      </Text>
      <SeperateBar />
    </View>
  );
}
