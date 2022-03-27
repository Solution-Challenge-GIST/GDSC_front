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
    borderRadius: 15,
    ...shadow,
  },
  calendar: {
    marginLeft: getDisplayWidth(9),
  },
  username: {
    fontSize: seniorMediumFontSize,
    fontWeight: mediumFontWeight,
    marginBottom: getDisplayHeight(16),
  },
  button: {
    width: getDisplayWidth(70),
    height: getDisplayHeight(39),
    borderRadius: 8,
  },
});
