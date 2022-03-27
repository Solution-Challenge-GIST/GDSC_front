import { StyleSheet } from 'react-native';
import {
  bgColor,
  boxBorderRadious,
  seniorMediumFontSize,
  shadow,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

export const addImageButtonStyles = StyleSheet.create({
  container: {
    width: getDisplayWidth(380),
    height: getDisplayHeight(320),
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  Recordcontainer: {
    width: getDisplayWidth(380),
    height: getDisplayHeight(150),
    backgroundColor: bgColor,
    borderRadius: boxBorderRadious,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow,
  },
  plus: {
    width: getDisplayWidth(84),
    height: getDisplayWidth(84),
    marginBottom: getDisplayHeight(5),
  },
  font: {
    fontSize: seniorMediumFontSize,
  },
  smallfont: {
    fontSize: 25,
  },
  image: {
    borderRadius: boxBorderRadious,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  recordingBtn: {
    alignItems: 'center',
  },
  revise: {
    width: getDisplayWidth(68),
    height: getDisplayWidth(68),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
