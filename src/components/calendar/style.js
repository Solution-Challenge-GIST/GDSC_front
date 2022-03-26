import { StyleSheet } from 'react-native';
import { shadow, mediumFontWeight, bgColor } from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
const commonCalender = {
  ...shadow,
  borderRadius: 10,
  backgroundColor: bgColor,
  alignItems: 'center',
  justifyContent: 'center',
};
export const calenderStyles = StyleSheet.create({
  smallCalender: {
    width: getDisplayWidth(61),
    height: getDisplayHeight(94),
    ...commonCalender,
  },
  smallMonth: {
    width: getDisplayWidth(22),
    height: getDisplayHeight(24),
  },
  smallMonthFont: {
    fontWeight: mediumFontWeight,
    fontSize: 17,
  },
  smallDay: {
    width: getDisplayWidth(44),
    height: getDisplayHeight(48),
  },
  smallDayFont: {
    fontWeight: mediumFontWeight,
    fontSize: 36,
  },
  smallDate: {
    width: getDisplayWidth(40),
    height: getDisplayHeight(18),
  },
  smallDateFont: {
    fontWeight: mediumFontWeight,
    fontSize: 14,
  },
  bigCalender: {
    width: getDisplayWidth(75),
    height: getDisplayHeight(110),
    ...commonCalender,
  },
  bigMonth: {
    marginTop: getDisplayHeight(5),
    width: getDisplayWidth(27),
    height: getDisplayHeight(28),
  },
  bigMonthFont: {
    fontSize: 20,
    fontWeight: mediumFontWeight,
  },
  bigDay: {
    width: getDisplayWidth(54),
    height: getDisplayHeight(56),
  },
  bigDayFont: {
    fontWeight: mediumFontWeight,
    fontSize: 46,
  },
  bigDate: {
    width: getDisplayWidth(50),
    height: getDisplayHeight(21),
  },
  bigDateFont: {
    fontWeight: mediumFontWeight,
    fontSize: 17,
  },
});
