import { StyleSheet } from 'react-native';
import {
  mediumFontSize,
  shadow,
  boldFontWeight,
  bgColor,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

export const questionBoxStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(380),
    height: getDisplayHeight(135),
    backgroundColor: bgColor,
    padding: getDisplayWidth(9),
    borderRadius: getDisplayWidth(26),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    ...shadow,
  },
  font: {
    width: getDisplayWidth(280),
    fontWeight: boldFontWeight,
    fontSize: mediumFontSize,
  },
});
