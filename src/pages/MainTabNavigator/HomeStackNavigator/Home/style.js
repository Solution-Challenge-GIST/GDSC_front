import { StyleSheet } from 'react-native';
import {
  mediumFontWeight,
  seniorMediumFontSize,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';
export const HomeStyles = StyleSheet.create({
  font: {
    fontSize: seniorMediumFontSize,
    fontWeight: mediumFontWeight,
  },
  MainContainer: {
    marginTop: getDisplayHeight(75),
    marginLeft: getDisplayWidth(36),
    marginBottom: getDisplayHeight(12),
  },
  UnanswerContainer: {
    marginLeft: getDisplayWidth(36),
    marginBottom: getDisplayHeight(20),
  },
});
