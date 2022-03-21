import { StyleSheet } from 'react-native';
import {
  seniorMediumFontSize,
  mediumFontWeight,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const record2Styles = StyleSheet.create({
  font: {
    fontWeight: mediumFontWeight,
    fontSize: seniorMediumFontSize - 1,
  },
  radioImage: {
    width: getDisplayWidth(240),
    height: getDisplayHeight(240),
    marginTop: getDisplayHeight(85),
    marginBottom: getDisplayHeight(55),
  },
  radioImageRecoding: {
    width: getDisplayWidth(350),
    height: getDisplayHeight(350),
    marginTop: getDisplayHeight(30),
    marginBottom: getDisplayHeight(17),
  },
  buttonImage: {
    width: getDisplayWidth(150),
    height: getDisplayWidth(150),
    resizeMode: 'contain',
  },
});
