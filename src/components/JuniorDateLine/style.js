import { StyleSheet } from 'react-native';
import { juniorMediumFontSize, mediumFontWeight } from '../../style/share';

export const juniorDateLineStyles = StyleSheet.create({
  seperateBar: {
    height: 0,
    width: '18%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#494539',
  },
  text: {
    fontWeight: mediumFontWeight,
    fontSize: juniorMediumFontSize,
    marginHorizontal: '2%',
  },
});
