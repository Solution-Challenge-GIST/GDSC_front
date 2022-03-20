import { StyleSheet } from 'react-native';
import { shadow, mediumFontWeight, bgColor } from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
const commonCalender = {
  ...shadow,
  borderRadius: 10,
  backgroundColor: bgColor,
  justifyContent: 'Top',
  alignItems: 'center',
};
export const calenderStyles = StyleSheet.create({
  smallCalender: {
    width: getDisplayWidth(61),
    height: getDisplayHeight(94),
    ...commonCalender,
  },
  smallMonth: {
    fontWeight: mediumFontWeight,
    width: getDisplayWidth(22),
    height: getDisplayHeight(24),
    fontSize: 18,
  },
  smallDay: {
    fontWeight: mediumFontWeight,
    width: getDisplayWidth(44),
    height: getDisplayHeight(48),
    fontSize: 36,
  },
  smallDate: {
    fontWeight: mediumFontWeight,
    width: getDisplayWidth(44),
    height: getDisplayHeight(18),
    fontSize: 14,
  },
  bigCalender: {
    width: getDisplayWidth(75),
    height: 109,
    ...commonCalender,
  },
  bigMonth: {
    fontWeight: mediumFontWeight,
    width: getDisplayWidth(27),
    height: getDisplayHeight(28),
    fontSize: 24,
  },
  bigDay: {
    fontWeight: mediumFontWeight,
    width: getDisplayWidth(54),
    height: getDisplayHeight(56),
    fontSize: 48,
  },
  bigDate: {
    fontWeight: mediumFontWeight,
    width: getDisplayWidth(55),
    height: getDisplayHeight(21),
    fontSize: 18,
  },
});
