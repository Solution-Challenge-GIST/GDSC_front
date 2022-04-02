import { StyleSheet } from 'react-native';
import {
  shadow,
  mediumFontWeight,
  bgColor,
  fontFamily,
} from '../../style/share';
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
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 17,
  },
  smallDay: {
    alignItems: 'center',
    width: '100%',
    height: getDisplayHeight(48),
  },
  smallDayFont: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 36,
  },
  smallDate: {
    alignItems: 'center',
    width: '100%',
    height: getDisplayHeight(18),
  },
  smallDateFont: {
    fontFamily: fontFamily.RobotoMedium,
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
    fontFamily: fontFamily.RobotoMedium,
  },
  bigDay: {
    width: '100%',
    height: getDisplayHeight(56),
    alignItems: 'center',
  },
  bigDayFont: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 46,
  },
  bigDate: {
    width: '100%',
    height: getDisplayHeight(21),
    alignItems: 'center',
  },
  bigDateFont: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: 17,
  },
});
