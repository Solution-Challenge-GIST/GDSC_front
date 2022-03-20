import { StyleSheet } from 'react-native';
import { mediumFontSize, mediumFontWeight } from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

const Textform = {
  fontWeight: mediumFontWeight,
  fontSize: mediumFontSize,
};
export const styles = StyleSheet.create({
  imageComponent: {
    marginLeft: getDisplayWidth(27),
    marginRight: getDisplayWidth(27),
    marginTop: getDisplayHeight(62),
  },
  info: {
    ...Textform,
  },
  align: {
    alignItems: 'center',
    marginTop: getDisplayHeight(18),
  },
  image: {
    width: getDisplayWidth(161),
    height: getDisplayHeight(175),
    backgroundColor: 'gray',
    borderRadius: 40,
  },
  profileName: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: getDisplayHeight(10),
  },
  profileName_big: {
    fontWeight: '700',
    fontSize: 48,
  },
  profileName_small: {
    fontWeight: '700',
    fontSize: 18,
  },
  infoComponent: {
    marginTop: getDisplayHeight(22),
    height: getDisplayHeight(655),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getDisplayHeight(74),
  },
});
