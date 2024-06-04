import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import { Provider } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext";
import { CombinedDarkTheme, CombinedLightTheme, NavigationDarkTheme, NavigationLightTheme } from "../config/theme";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isDarkTheme } = useTheme();
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedLightTheme;

  const themeNavigation = isDarkTheme ? NavigationDarkTheme : NavigationLightTheme;


  return (
    <Provider theme={theme}>
      <NavigationContainer theme={themeNavigation}>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: true,
              title: "Registro de usuário",
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: true,
            
            }}
          />
        
        <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              headerShown: false,
              title: "Configurações",
            }}
          />
           
            
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
