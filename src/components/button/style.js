import { StyleSheet } from 'react-native';
import { baseColor, mediumFontWeight, mediumFontSize } from '../../style/share';
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

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
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
