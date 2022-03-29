import { StyleSheet } from 'react-native';
import {
  bgColor,
  boldFontWeight,
  boxBorderRadious,
  juniorMediumFontSize,
  juniorSmallFontSize,
  mediumFontWeight,
  seniorBigFontSize,
  seniorMediumFontSize,
  shadow,
} from '../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../utility';

export const AlbumCardStyles = StyleSheet.create({
  Maincontainer: {
    width: getDisplayWidth(360),
    height: getDisplayHeight(518),
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    ...shadow,
  },

  container: {
    width: getDisplayWidth(182),
    height: getDisplayHeight(310),
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    ...shadow,
  },
  MainCardImage: {
    width: getDisplayWidth(360),
    height: getDisplayHeight(364),
    borderRadius: getDisplayWidth(26),
    resizeMode: 'cover',
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

  seniorUserInfo: {
    fontWeight: boldFontWeight,
    fontSize: seniorMediumFontSize,
    left: getDisplayWidth(5),
    top: getDisplayHeight(4),
  },
  replyStatus: {
    position: 'absolute',
    top: getDisplayWidth(-10),
    left: getDisplayWidth(-10),
    width: getDisplayWidth(28),
    height: getDisplayWidth(28),
  },
  MainUserInfo: {
    fontWeight: boldFontWeight,
    fontSize: seniorBigFontSize,
  },
  emotion: {
    position: 'absolute',
    width: getDisplayWidth(42),
    height: getDisplayWidth(42),
    top: getDisplayHeight(315),
    right: getDisplayWidth(4),
  },
  albumeEmotion: {
    position: 'absolute',
    width: getDisplayWidth(36),
    height: getDisplayWidth(36),
    top: getDisplayHeight(190),
    right: getDisplayWidth(4),
  },
});
