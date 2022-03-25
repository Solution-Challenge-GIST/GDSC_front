import { StyleSheet } from 'react-native';
import {
  mediumFontWeight,
  seniorMediumFontSize,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const AddImageStyles = StyleSheet.create({
  container: {
    marginTop: getDisplayHeight(80),
    marginHorizontal: getDisplayWidth(20),
  },
  font: {
    fontSize: seniorMediumFontSize,
    fontWeight: mediumFontWeight,
  },
  buttonGap: {
    marginTop: getDisplayHeight(5),
    marginBottom: getDisplayHeight(32),
  },
});
