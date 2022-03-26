import { StyleSheet } from 'react-native';
import { getDisplayWidth, getDisplayHeight } from '../../utility';
import {
  bgColor,
  mediumFontWeight,
  seniorMediumFontSize,
  shadow,
} from '../../style/share';

export const voiceReplyStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(360),
    height: getDisplayHeight(118),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bgColor,
    borderRadius: 10,
    ...shadow,
  },
  username: {
    fontSize: seniorMediumFontSize,
    fontWeight: mediumFontWeight,
    marginBottom: getDisplayHeight(16),
  },
  button: {
    width: getDisplayWidth(72),
    height: getDisplayHeight(38),
  },
});
