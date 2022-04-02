import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Signup from './src/pages/Signup/Signup';
import MainTabNavigator from './src/pages/MainTabNavigator/MainTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { BASE_URL } from './src/constants/urls';
import { JUNIOR_TOKEN, SENIOR_TOKEN } from './src/constants/token';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
import * as Font from 'expo-font';

const Stack = createStackNavigator();
export const queryClient = new QueryClient();
// axios.defaults.headers.common['Authorization'] = JUNIOR_TOKEN;
axios.defaults.headers.common['Authorization'] = SENIOR_TOKEN;
axios.defaults.baseURL = BASE_URL;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay_splash() {
  await SplashScreen.preventAutoHideAsync();
  await sleep(2000);
  await SplashScreen.hideAsync();
}
const getFonts = () => {
  return Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
};
export default function App() {
  // LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['Require cycle:', '[react-native-gesture-handler]']);
  getFonts();
  delay_splash();
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
