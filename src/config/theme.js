import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
const CombinedLightTheme = {
    // ...DefaultTheme,
    ...MD3LightTheme,
}
const CombinedDarkTheme = {
    ...MD3DarkTheme,
}

export const NavigationDarkTheme = {
    ...DarkTheme,
}
export const NavigationLightTheme = {
    ...DefaultTheme,
}

export { CombinedDarkTheme, CombinedLightTheme }