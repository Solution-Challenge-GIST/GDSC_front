import { View } from 'react-native';
import { useME } from '../../../../hooks/accounts/useMe';
import JuniorAlbum from './JuniorAlbum';
import SeniorAlbum from './SeniorAlbum';
export default function Album() {
  const { data, isLoading } = useME();
  if (!isLoading) {
    if (data.role == 'JUNIOR') {
      return <JuniorAlbum />;
    } else {
      return <SeniorAlbum />;
    }
  } else {
    return <View></View>;
  }
}
