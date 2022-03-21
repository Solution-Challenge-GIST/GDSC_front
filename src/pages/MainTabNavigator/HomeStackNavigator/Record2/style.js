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
    width: getDisplayWidth(168),
    height: getDisplayHeight(168),
    marginTop: getDisplayHeight(85),
    marginBottom: getDisplayHeight(55),
  },
  radioImageRecoding: {
    width: getDisplayWidth(261),
    height: getDisplayHeight(261),
    marginTop: getDisplayHeight(28),
    marginBottom: getDisplayHeight(17),
  },
  buttonImage: {
    width: getDisplayWidth(88),
    height: getDisplayWidth(88),
    resizeMode: 'contain',
  },
});
