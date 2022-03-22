import { StyleSheet } from 'react-native';
import {
  baseColor,
  mediumFontWeight,
  seniorMediumFontSize,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

export const TextStyles = StyleSheet.create({
  ValueTextView: {
    width: getDisplayWidth(401),
    height: getDisplayHeight(69),
    fontWeight: mediumFontWeight,
    fontSize: seniorMediumFontSize,
    borderColor: '#C4C4C4',
    borderRadius: 27,
    backgroundColor: baseColor,

    justifyContent: 'center',
  },
  ValueText: {
    fontWeight: mediumFontWeight,
    fontSize: seniorMediumFontSize,
  },
  NameText: {
    marginBottom: 7,
    fontWeight: mediumFontWeight,
    fontSize: seniorMediumFontSize,
  },
});
