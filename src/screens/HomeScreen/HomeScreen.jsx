import { Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";
import Home from "./screens/Home";

export default function HomeScreen() {
    return (
        <Surface style={styles.container}>
            <View style={styles.container_inner}>
              <Home />
            </View>
        </Surface>
    );
}
