import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style.js';

interface Normal {
  text: string;
  onPress: Function;
  disable?: boolean;
}

export default function NormalnarrowButton(props: Normal) {
  return (
    <TouchableOpacity disabled={props.disable} onPress={props.onPress}>
      <View style={styles.NormalNarrowbutton}>
        <Text style={styles.buttonfont}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
