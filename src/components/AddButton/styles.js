import { StyleSheet } from 'react-native';
import {
  bgColor,
  boxBorderRadious,
  seniorMediumFontSize,
  shadow,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

export const addImageButtonStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(360),
    height: getDisplayHeight(170),
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  plus: {
    width: getDisplayWidth(84),
    height: getDisplayWidth(84),
    marginBottom: getDisplayHeight(5),
  },
  font: {
    fontSize: seniorMediumFontSize,
  },
  image: {
    borderRadius: boxBorderRadious,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
