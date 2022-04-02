import { StyleSheet } from 'react-native';
import {
  baseColor,
  mediumFontWeight,
  seniorMediumFontSize,
  fontFamily,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

export const TextStyles = StyleSheet.create({
  ValueTextView: {
    width: getDisplayWidth(401),
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
    borderColor: '#C4C4C4',
    borderRadius: 27,
    backgroundColor: baseColor,
    justifyContent: 'center',
  },
  ValueText: {
    flexShrink: 1,
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
  },
  NameText: {
    marginBottom: 7,
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
  },
});
