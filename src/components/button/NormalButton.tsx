import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style.js';

interface Normal {
  text: string;
  onPress: Function;
  disable?: boolean;
}

export default function NormalButton(props: Normal) {
  return (
    <TouchableOpacity disabled={props.disable} onPress={props.onPress}>
      <View style={styles.Normalbutton}>
        <Text style={styles.buttonfont}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
