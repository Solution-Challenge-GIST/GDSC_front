import { StyleSheet } from 'react-native';
import { getDisplayHeight } from '../../../utility';
export const DetailStyles = StyleSheet.create({
  container: {
    marginTop: getDisplayHeight(106),
    alignItems: 'center',
  },
  voiceContainer: {
    marginTop: getDisplayHeight(20),
  },
});
