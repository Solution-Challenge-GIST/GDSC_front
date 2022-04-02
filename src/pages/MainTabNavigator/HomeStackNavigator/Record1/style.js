import { StyleSheet } from 'react-native';
import {
  seniorMediumFontSize,
  mediumFontWeight,
  fontFamily,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const record1Styles = StyleSheet.create({
  position: {
    marginTop: getDisplayHeight(120),
    marginLeft: getDisplayWidth(27),
    marginRight: getDisplayWidth(27),
  },
  text: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
    textAlign: 'center',
  },
});
