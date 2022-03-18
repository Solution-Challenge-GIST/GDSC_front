import { StyleSheet } from 'react-native';
import {
  baseColor,
  mediumFontWeight,
  mediumFontSize,
  shadow,
} from '../../style/share';
const Commonbutton = {
  width: 390,
  height: 88,
  backgroundColor: baseColor,
  borderWidth: 20,
  borderColor: baseColor,
  borderRadius: 44,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  ...shadow,
};
const CommonRelative = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
export const styles = StyleSheet.create({
  Normalbutton: {
    ...Commonbutton,
  },
  buttonfont: {
    fontWeight: mediumFontWeight,
    fontSize: mediumFontSize,
  },
  Relativebutton: {
    ...Commonbutton,
    flexDirection: 'row',
  },
  RelativeLeft: {
    ...CommonRelative,
    borderRightWidth: 2,
    borderColor: '#D1C9AB',
  },
  RelativeRight: {
    ...CommonRelative,
  },
});
