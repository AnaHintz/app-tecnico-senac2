import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";
import { auth } from "../../config/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [hidePassword, setHidePassword] = useState(true);


    async function handleLogin() {
        console.log("Login realizado com sucesso!");
        try {
            const userRef = signInWithEmailAndPassword(auth, email, senha);
            if (userRef) {
                console.log("Usuário logado com sucesso!");
                navigation.navigate("HomeScreen");
            }
        } catch (e) {
            console.error(e);
        }

    }
    return (
        <Surface style={styles.container}>
            <View style={styles.container_inner}>
                <Icon source="account" size={100} />
                <Text>Vamos fazer Login</Text>
                <Button onPress={() => navigation.navigate("RegisterScreen")}>
                    Fazer cadastro
                </Button>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                />
                <TextInput
                    label="Senha"
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Digite sua senha"
                    secureTextEntry={hidePassword}
                    right={
                        <Icon
                            name={hidePassword ? "eye" : "eye-off"}
                            onPress={() => setHidePassword(!hidePassword)}
                        />
                    }
                />

                <Button mode="text" onPress={handleLogin}>
                    Fazer Login
                </Button>

            </View>
        </Surface>
    );
}
