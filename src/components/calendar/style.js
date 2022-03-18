import { StyleSheet } from 'react-native';
import { shadow, mediumFontWeight } from '../../style/share';
const commonCalender = {
  ...shadow,
  borderRadius: 10,
  backgroundColor: 'white',
  justifyContent: 'Top',
  alignItems: 'center',
};
export const calenderStyles = StyleSheet.create({
  smallCalender: {
    width: 61,
    height: 94,
    ...commonCalender,
  },
  smallMonth: {
    fontWeight: mediumFontWeight,
    width: 22,
    height: 24,
    fontSize: 18,
  },
  smallDay: {
    fontWeight: mediumFontWeight,
    width: 44,
    height: 48,
    fontSize: 36,
  },
  smallDate: {
    fontWeight: mediumFontWeight,
    width: 44,
    height: 18,
    fontSize: 14,
  },
  bigCalender: {
    width: 75,
    height: 109,
    ...commonCalender,
  },
  bigMonth: {
    fontWeight: mediumFontWeight,
    width: 27,
    height: 28,
    fontSize: 24,
  },
  bigDay: {
    fontWeight: mediumFontWeight,
    width: 54,
    height: 56,
    fontSize: 48,
  },
  bigDate: {
    fontWeight: mediumFontWeight,
    width: 55,
    height: 21,
    fontSize: 18,
  },
});
