import { StyleSheet } from 'react-native';
import { shadow, mediumFontWeight, bgColor } from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
const commonCalender = {
  ...shadow,
  borderRadius: 10,
  backgroundColor: bgColor,
};
export const calenderStyles = StyleSheet.create({
  smallCalender: {
    width: getDisplayWidth(61),
    height: getDisplayHeight(94),
    ...commonCalender,
  },
  smallMonth: {
    alignItems: 'center',
    width: '100%',
    height: getDisplayHeight(24),
  },
  smallMonthFont: {
    fontWeight: mediumFontWeight,
    fontSize: 17,
  },
  smallDay: {
    alignItems: 'center',
    width: '100%',
    height: getDisplayHeight(48),
  },
  smallDayFont: {
    fontWeight: mediumFontWeight,
    fontSize: 36,
  },
  smallDate: {
    alignItems: 'center',
    width: '100%',
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
    width: '100%',
    height: getDisplayHeight(28),
    alignItems: 'center',
  },
  bigMonthFont: {
    fontSize: 20,
    fontWeight: mediumFontWeight,
  },
  bigDay: {
    width: '100%',
    height: getDisplayHeight(56),
    alignItems: 'center',
  },
  bigDayFont: {
    fontWeight: mediumFontWeight,
    fontSize: 46,
  },
  bigDate: {
    width: '100%',
    height: getDisplayHeight(21),
    alignItems: 'center',
  },
  bigDateFont: {
    fontWeight: mediumFontWeight,
    fontSize: 17,
  },
});
