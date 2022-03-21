import { StyleSheet } from 'react-native';
import { mediumFontWeight, mediumFontSize } from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
import { baseColor } from '../../style/share';
export const styles = StyleSheet.create({
  NormalInput: {
    width: getDisplayWidth(376),
    height: getDisplayHeight(81),
    fontWeight: mediumFontWeight,
    fontSize: mediumFontSize,
    borderColor: '#C4C4C4',
    borderWidth: 2,
    borderRadius: 11,
    textAlign: 'center',
  },
  ProfileInput: {
    width: getDisplayWidth(401),
    height: getDisplayHeight(69),
    fontWeight: mediumFontWeight,
    fontSize: mediumFontSize,
    borderColor: '#C4C4C4',
    borderRadius: 27,
    backgroundColor: baseColor,
  },
  ProfileName: {
    marginBottom: 7,
    fontWeight: mediumFontWeight,
    fontSize: mediumFontSize,
  },
});
