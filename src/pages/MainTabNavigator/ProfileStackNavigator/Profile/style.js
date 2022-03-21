import { StyleSheet } from 'react-native';
import {
  seniorMediumFontSize,
  mediumFontWeight,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';

const textForm = {
  fontWeight: mediumFontWeight,
  fontSize: seniorMediumFontSize,
};
export const profileStyles = StyleSheet.create({
  imageComponent: {
    marginLeft: getDisplayWidth(27),
    marginRight: getDisplayWidth(27),
    marginTop: getDisplayHeight(62),
  },
  info: {
    ...textForm,
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
    height: getDisplayHeight(700),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: getDisplayHeight(74),
  },
  fixbutton: {
    width: getDisplayWidth(390),
    height: getDisplayHeight(88),
    ...Commonbutton,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fixImage: {
    width: getDisplayWidth(80),
    height: getDisplayHeight(80),
    resizeMode: 'contain',
  },
});
