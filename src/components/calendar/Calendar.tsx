import { View } from 'react-native';
import { styles } from './style.js';

interface date {
  month: string;
  day: string;
  date: string;
  fontSize: 'big' | 'small';
}

export default function Calendar(props: date) {
  if (props.fontSize === 'big') {
    return <View></View>;
  } else {
    return <View></View>;
  }
}
