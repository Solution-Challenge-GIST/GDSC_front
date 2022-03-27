import { StyleSheet } from 'react-native';
import {
  mediumFontWeight,
  seniorMediumFontSize,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

export const AddImageStyles = StyleSheet.create({
  container: {
    marginTop: getDisplayHeight(79),
    marginHorizontal: getDisplayWidth(27),
  },
  pictureText: {
    marginBottom: getDisplayHeight(13),
  },
  font: {
    fontSize: seniorMediumFontSize,
    fontWeight: mediumFontWeight,
  },
  buttonGap: {
    alignItems: 'center',
    marginTop: getDisplayHeight(5),
    marginBottom: getDisplayHeight(32),
  },
});
