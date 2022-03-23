import { StyleSheet } from 'react-native';
import { bgColor, boxBorderRadious, shadow } from '../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../utility';

export const AlbumJuniorVoiceStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(380),
    height: getDisplayHeight(135),
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    ...shadow,
  },
});
