import { StyleSheet } from 'react-native';
import {
  boldFontWeight,
  seniorMediumFontSize,
  shadow,
} from '../../../../style/share';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';
export const Memostyles = StyleSheet.create({
  titlecontainer: {
    flexDirection: 'row',
    marginTop: getDisplayHeight(69),
    marginBottom: getDisplayHeight(9),
    alignItems: 'center',
  },
  titleMemo: {
    marginRight: getDisplayWidth(11),
  },
  title: { fontWeight: boldFontWeight, fontSize: seniorMediumFontSize },
  emtioncontainer: {
    width: getDisplayWidth(290),
    height: getDisplayHeight(46),
    backgroundColor: 'white',
    borderRadius: 9,
    ...shadow,
    flexDirection: 'row',
  },
  emotion: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emotionSize: {
    width: getDisplayWidth(46),
    height: getDisplayHeight(46),
  },
  Memocontent: {
    width: getDisplayWidth(380),
    height: getDisplayHeight(574),
    borderRadius: 12,
    backgroundColor: 'white',
    borderColor: 'white',
    ...shadow,
    marginBottom: getDisplayHeight(25),
  },
  underbar: {
    borderColor: '#F24E1E',
    width: getDisplayWidth(346),
    height: getDisplayHeight(0),
    borderWidth: 1,
  },
  Memotitle: {
    fontWeight: boldFontWeight,
    fontSize: 20,
    marginTop: getDisplayHeight(20),
    marginBottom: getDisplayHeight(13),
    marginLeft: getDisplayWidth(17),
    marginRight: getDisplayWidth(17),
  },
  Memotext: {
    fontWeight: boldFontWeight,
    marginTop: getDisplayHeight(16),
    marginLeft: getDisplayWidth(17),
    marginRight: getDisplayWidth(17),
  },
});
