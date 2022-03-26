import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Signup from './src/pages/Signup/Signup';
import MainTabNavigator from './src/pages/MainTabNavigator/MainTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { BASE_URL } from './src/constants/urls';

const Stack = createStackNavigator();
const queryClient = new QueryClient();
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5MTc1MDI3LCJpYXQiOjE2NDgzMTEwMjcsImp0aSI6IjM3NDY1YzBjZTBlNjQ3NmJhYWJkNjYyNmIyM2ZiNDc0IiwidXNlcl9pZCI6Nn0.PSOX0XNIbPzCAj1lfwjidgINJYG6eyl7-eRdZN08KqA';
axios.defaults.baseURL = BASE_URL;

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
