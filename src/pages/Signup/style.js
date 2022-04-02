import { StyleSheet } from 'react-native';
import {
  seniorMediumFontSize,
  mediumFontWeight,
  fontFamily,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
export const signUpstyles = StyleSheet.create({
  position: {
    marginTop: getDisplayHeight(126),
    marginLeft: getDisplayWidth(26),
    marginRight: getDisplayWidth(26),
  },
  image: {
    height: getDisplayHeight(97),
    width: getDisplayWidth(97),
  },
  MainText: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
    marginBottom: getDisplayHeight(20),
  },

  button: {
    marginTop: getDisplayHeight(438),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  finalView: {
    height: getDisplayHeight(419),
    width: getDisplayWidth(233),
    marginTop: getDisplayHeight(187),
    marginLeft: getDisplayWidth(97),
    marginRight: getDisplayWidth(97),
    alignItems: 'center',
  },
  heartImage: {
    height: getDisplayHeight(91),
    width: getDisplayWidth(171),
  },
  radioImage: {
    height: getDisplayHeight(168),
    width: getDisplayWidth(168),
  },
  finalTextView: {
    marginTop: getDisplayHeight(26),
    alignItems: 'center',
  },
  finalText: {
    fontFamily: fontFamily.RobotoMedium,
    fontSize: seniorMediumFontSize,
  },
  finalbutton: {
    marginTop: getDisplayHeight(185),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
