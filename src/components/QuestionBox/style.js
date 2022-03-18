import { StyleSheet } from 'react-native';
import { mediumFontSize, shadow, boldFontWeight } from '../../style/share';
export const questionBoxStyles = StyleSheet.create({
  container: {
    width: 380,
    height: 135,
    padding: 9,
    borderRadius: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  font: {
    fontWeight: boldFontWeight,
    fontSize: mediumFontSize,
  },
});
