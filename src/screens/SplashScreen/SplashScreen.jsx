import { ActivityIndicator, Surface } from "react-native-paper";
import { styles } from "../../config/styles";
import { useEffect } from "react";

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        navigation.navigate("LoginScreen");
    }, []);

    return (
        <Surface style={styles.container}>
            <Surface style={styles.container_inner}>
                <ActivityIndicator animating={true} />
            </Surface>
        </Surface>
    );
}
