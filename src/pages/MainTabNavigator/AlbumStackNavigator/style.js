import { StyleSheet } from 'react-native';
import {
  mediumFontWeight,
  seniorMediumFontSize,
  fontFamily,
} from '../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../utility';

export const albumStyles = StyleSheet.create({
  title: {
    marginTop: getDisplayHeight(62),
    marginLeft: getDisplayWidth(27),
  },
  titleText: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
  },
  dateLineSenior: {
    marginTop: getDisplayHeight(62),
    width: '100%',
    alignItems: 'center',
    marginBottom: getDisplayHeight(24),
  },
  card: {
    marginLeft: getDisplayWidth(20),
    marginRight: getDisplayWidth(5),
    marginBottom: getDisplayHeight(20),
  },
  voice: {
    marginBottom: getDisplayHeight(20),
    width: '100%',
    alignItems: 'center',
  },
});
