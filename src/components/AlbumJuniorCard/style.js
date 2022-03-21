import { StyleSheet } from 'react-native';
import {
  bgColor,
  juniorMediumFontSize,
  juniorSmallFontSize,
  mediumFontWeight,
  shadow,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

export const AlbumJuniorCardStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(182),
    height: getDisplayHeight(310),
    backgroundColor: bgColor,
    borderRadius: getDisplayWidth(26),
    ...shadow,
  },

  cardImage: {
    width: getDisplayWidth(182),
    height: getDisplayHeight(230),
    borderRadius: getDisplayWidth(26),
    // 하단은 radius가 없는 버전인데 개인적으로는 이게 더 나아 보인다.
    // borderTopLeftRadius: getDisplayWidth(26),
    // borderTopRightRadius: getDisplayWidth(26),
    resizeMode: 'cover',
  },

  cardTitle: {
    marginVertical: getDisplayHeight(8),
    fontWeight: mediumFontWeight,
    fontSize: juniorMediumFontSize,
  },

  cardMemo: {
    fontWeight: mediumFontWeight,
    fontSize: juniorSmallFontSize,
  },

  replyStatus: {
    position: 'absolute',
    top: getDisplayWidth(-10),
    left: getDisplayWidth(-10),
    width: getDisplayWidth(28),
    height: getDisplayWidth(28),
  },
});
