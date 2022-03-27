import { View, Text } from 'react-native';
import { CalendarDate } from '../../type.js';
import { calenderStyles } from './style.js';

export default function Calendar(props: CalendarDate) {
  if (props.fontSize === 'big') {
    return (
      <View style={calenderStyles.bigCalender}>
        <View style={calenderStyles.bigMonth}>
          <Text style={calenderStyles.bigMonthFont}>{props.month}</Text>
        </View>
        <View style={calenderStyles.bigDay}>
          <Text style={calenderStyles.bigDayFont}>{props.date}</Text>
        </View>
        <View style={calenderStyles.bigDate}>
          <Text style={calenderStyles.bigDateFont}>{props.day}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={calenderStyles.smallCalender}>
        <View style={calenderStyles.smallMonth}>
          <Text style={calenderStyles.smallMonthFont}>{props.month}</Text>
        </View>
        <View style={calenderStyles.smallDay}>
          <Text style={calenderStyles.smallDayFont}>{props.date}</Text>
        </View>
        <View style={calenderStyles.smallDate}>
          <Text style={calenderStyles.smallDateFont}>{props.day}</Text>
        </View>
      </View>
    );
  }
}
