import { StyleSheet } from 'react-native';
import { mediumFontSize, mediumFontWeight } from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const styles = StyleSheet.create({
  position: {
    marginTop: getDisplayHeight(120),
    marginLeft: getDisplayWidth(27),
    marginRight: getDisplayWidth(27),
  },
  component: {
    width: getDisplayWidth(374),
    height: getDisplayHeight(510),
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: mediumFontWeight,
    fontSize: mediumFontSize,
    textAlign: 'center',
  },
});
