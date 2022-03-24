import { View, Text } from 'react-native';
import React from 'react';
import { Date } from '../../type';
import { DateLineStyles } from './style';

interface DateWithUserType extends Date {
  type: 'junior' | 'senior';
}

const SeperateBar = () => {
  return <View style={DateLineStyles.juniorSeperateBar} />;
};

export default function DateLine(props: DateWithUserType) {
  const { year, month, day, weekday, type } = props;
  if (type === 'junior') {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SeperateBar />
        <Text style={DateLineStyles.juniorText}>
          {`${year}-${month}- ${day}-${weekday}`}
        </Text>
        <SeperateBar />
      </View>
    );
  }
  if (type === 'senior') {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* <SeperateBar /> */}
        <Text style={DateLineStyles.seniorText}>
          {`${year}-${month}-${day}-${weekday}`}
        </Text>
        {/* <SeperateBar /> */}
      </View>
    );
  }
  return <></>;
}
