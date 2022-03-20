import { StyleSheet } from 'react-native';
import { mediumFontSize, mediumFontWeight } from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const record2Styles = StyleSheet.create({
  font: {
    fontWeight: mediumFontWeight,
    fontSize: mediumFontSize - 1,
  },
  radioImage: {
    width: getDisplayWidth(168),
    height: getDisplayHeight(168),
    marginTop: getDisplayHeight(85),
    marginBottom: getDisplayHeight(55),
  },
  buttonImage: {
    width: getDisplayWidth(88),
    height: getDisplayWidth(88),
    resizeMode: 'contain',
  },
});
