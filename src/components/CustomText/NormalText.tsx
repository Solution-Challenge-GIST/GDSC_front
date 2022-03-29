import { TextInput, Text, View } from 'react-native';
import { getDisplayHeight } from '../../utility';
import { TextStyles } from './style';

interface inputType {
  name: string;
  value: string;
}
export default function NormalText(props: inputType) {
  var len = 0;
  if (props.value.length > 19) {
    len = 2;
  } else {
    len = 1;
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
