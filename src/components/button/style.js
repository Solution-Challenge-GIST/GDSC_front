import { StyleSheet } from 'react-native';
import {
  baseColor,
  mediumFontWeight,
  seniorMediumFontSize,
  shadow,
} from '../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../utility';

const Commonbutton = {
  backgroundColor: baseColor,
  borderWidth: 2,
  borderColor: baseColor,
  borderRadius: 44,
  ...shadow,
};
const CommonRelative = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
export const styles = StyleSheet.create({
  Normalbutton: {
    width: getDisplayWidth(390),
    height: getDisplayHeight(88),
    ...Commonbutton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonfont: {
    fontWeight: mediumFontWeight,
    fontSize: seniorMediumFontSize,
  },
  Relativebutton: {
    width: getDisplayWidth(373),
    height: getDisplayHeight(112),
    ...Commonbutton,
    flexDirection: 'row',
  },
  RelativeLeft: {
    marginTop: 15,
    marginBottom: 15,
    ...CommonRelative,
    borderRightWidth: 2,
    borderColor: '#D1C9AB',
  },
  RelativeRight: {
    ...CommonRelative,
  },
});
