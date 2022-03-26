import { StyleSheet } from 'react-native';
import {
  seniorMediumFontSize,
  mediumFontWeight,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const record1Styles = StyleSheet.create({
  position: {
    marginTop: getDisplayHeight(120),
    marginLeft: getDisplayWidth(27),
    marginRight: getDisplayWidth(27),
  },
  text: {
    fontWeight: mediumFontWeight,
    fontSize: seniorMediumFontSize,
    textAlign: 'center',
  },
});
