import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style.js';

interface Relative {
  name: string;
  relative: string;
  onPress: Function;
}
export default function RelativeButton(props: Relative) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.Relativebutton}>
        <View style={styles.RelativeLeft}>
          <Text style={styles.buttonfont}>{props.name}</Text>
        </View>
        <View style={styles.RelativeRight}>
          <Text style={styles.buttonfont}>{props.relative}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
