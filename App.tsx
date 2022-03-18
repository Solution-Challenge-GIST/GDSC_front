import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/Main/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
