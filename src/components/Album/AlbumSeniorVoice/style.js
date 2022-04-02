import { StyleSheet } from 'react-native';
import {
  bgColor,
  boldFontWeight,
  boxBorderRadious,
  seniorMediumFontSize,
  shadow,
  fontFamily,
} from '../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../utility';

export const AlbumSeniorVoiceStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(380),
    height: getDisplayHeight(135),
    justifyContent: 'center',
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    ...shadow,
  },

  speaker: {
    width: getDisplayWidth(73),
    height: getDisplayWidth(73),
  },

  font: {
    fontSize: seniorMediumFontSize,
    fontFamily: fontFamily.RobotoBold,
  },
  replyStatus: {
    position: 'absolute',
    top: getDisplayWidth(-10),
    left: getDisplayWidth(-10),
    width: getDisplayWidth(28),
    height: getDisplayWidth(28),
  },
});
