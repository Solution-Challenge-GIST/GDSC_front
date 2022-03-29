import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { useME } from '../../../../hooks/accounts/useMe';

import JuniorHome from './JuniorHome';
import SeniorHome from './SeniorHome';

export default function Home() {
  const { data, isLoading } = useME();

  if (!isLoading) {
    if (data.role === 'SENIOR') {
      return <SeniorHome />;
    } else {
      return <JuniorHome />;
    }
  } else {
    return <View></View>;
  }
}
