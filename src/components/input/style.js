import { StyleSheet } from 'react-native';
import {
  mediumFontWeight,
  seniorMediumFontSize,
  fontFamily,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
export const styles = StyleSheet.create({
  NormalInput: {
    width: getDisplayWidth(376),
    height: getDisplayHeight(81),
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
    borderColor: '#C4C4C4',
    borderWidth: 2,
    borderRadius: 11,
    textAlign: 'center',
  },
  ProfileInput: {
    width: getDisplayWidth(401),
    justifyContent: 'center',
    borderColor: '#F24E1E',
    borderWidth: 2,
    borderRadius: 27,
  },
  ProfileValue: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
  },
  ProfileName: {
    marginBottom: 7,
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
  },
});
