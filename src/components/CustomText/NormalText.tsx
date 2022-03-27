import { TextInput, Text, View } from 'react-native';
import { getDisplayHeight } from '../../utility';
import { TextStyles } from './style';

interface inputType {
  name: string;
  value: string;
}
export default function NormalText(props: inputType) {
  var len = 0;
  if (props.value.length / 18 - parseInt(props.value.length / 17) === 0.0) {
    len = parseInt(props.value.length / 17);
  } else {
    len = parseInt(props.value.length / 17) + 1;
  }
  return (
    <View>
      <Text style={TextStyles.NameText}>{props.name}</Text>
      <View
        style={{
          ...TextStyles.ValueTextView,
          height: getDisplayHeight(69 * len),
        }}
      >
        <Text style={TextStyles.ValueText}>{props.value}</Text>
      </View>
    </View>
  );
}
