import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style.js';

interface Normal {
  text: string;
}

export function Normalbutton(props: Normal) {
  const onClick = () => {
    console.log('hi');
  };
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.Normalbutton}>
        <Text style={styles.buttonfont}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
interface Relative {
  name: string;
  relative: string;
}
export function Relativebutton(props: Relative) {
  const onClick = () => {
    console.log('hi');
  };
  return (
    <TouchableOpacity onPress={onClick}>
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
