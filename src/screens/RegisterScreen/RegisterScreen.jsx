import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { styles } from "../../config/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");
    const [error, setError] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    async function handleRegister() {

        if (!email.trim() || !senha.trim() || !repetirSenha.trim()) {
            setError("Por favor, preencha todos os campos.");
            return;
          }
      
          // Verificar se as senhas são iguais
          else if (senha !== repetirSenha) {
            setError("As senhas não estão iguais. Por favor, tente novamente.");
            return; }

      
        try {
            const userRef = await createUserWithEmailAndPassword(auth, email, senha);

            if (userRef) {
                console.log("Usuário registrado com sucesso!");
                navigation.navigate("LoginScreen");
            }

            
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Surface style={styles.container}>
            <View style={styles.container_inner}>
                <Icon source="account-check" size={100} />
                <Text>Tela de Registro</Text>
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
                <TextInput
                    label="Confirmar Senha"
                    style={styles.input}
                    value={repetirSenha}
                    onChangeText={setRepetirSenha}
                    placeholder="Confirme sua senha"
                    secureTextEntry={hidePassword}
                    right={
                        <Icon
                            name={hidePassword ? "eye" : "eye-off"}
                            onPress={() => setHidePassword(!hidePassword)}
                        />
                    }
                />
                <Button mode="contained" onPress={handleRegister}>
                    Realizar Registro
                </Button>
                <Button mode="text" onPress={() => navigation.navigate("LoginScreen")}>
                    Voltar para o login
                </Button>
            </View>
        </Surface>
    );
}
