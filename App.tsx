import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Signup from './src/pages/Signup/Signup';
import MainTabNavigator from './src/pages/MainTabNavigator/MainTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
