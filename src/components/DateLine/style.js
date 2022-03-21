import { StyleSheet } from 'react-native';
import {
  juniorMediumFontSize,
  mediumFontWeight,
  seniorMediumFontSize,
} from '../../style/share';

export const DateLineStyles = StyleSheet.create({
  juniorSeperateBar: {
    height: 0,
    width: '18%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#494539',
  },
  juniorText: {
    fontWeight: mediumFontWeight,
    fontSize: juniorMediumFontSize,
    marginHorizontal: '2%',
  },
  seniorText: {
    fontSize: seniorMediumFontSize,
  },
});
