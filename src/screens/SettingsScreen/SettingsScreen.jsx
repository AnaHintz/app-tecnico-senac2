import { Button, Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";
import { useTheme } from "../../contexts/ThemeContext";
import { View } from "react-native";

export default function SettingsScreen() {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Configurações Maravilhosas do seu APP</Text>
        <Button onPress={toggleTheme}>Alternar tema</Button>
      </View>
    </Surface>
  );
}
