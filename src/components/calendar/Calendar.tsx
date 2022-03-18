import { View, Text } from 'react-native';
import { calenderStyles } from './style.js';

interface date {
  month: string;
  day: string;
  date: string;
  fontSize: 'big' | 'small';
}

export default function Calendar(props: date) {
  if (props.fontSize === 'big') {
    return (
      <View style={calenderStyles.bigCalender}>
        <View style={calenderStyles.bigMonth}>{props.month}</View>
        <View style={calenderStyles.bigDay}>{props.day}</View>
        <View style={calenderStyles.bigDate}>{props.date}</View>
      </View>
    );
  } else {
    return (
      <View style={calenderStyles.smallCalender}>
        <View style={calenderStyles.smallMonth}>{props.month}</View>
        <View style={calenderStyles.smallDay}>{props.day}</View>
        <View style={calenderStyles.smallDate}>{props.date}</View>
      </View>
    );
  }
}
