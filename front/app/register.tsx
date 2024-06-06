import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import axios from "axios";

const RegisterScreen = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  function handleRegistration() {
    const data = {
      username,
      email,
      password,
    };

    axios
      .post("http://localhost:3000/register", data)
      .then((response) => {
        if (response.data.success) {
          alert("Registro bem-sucedido!");
          router.push("/login");
        } else {
          alert("Ocorreu um erro durante o registro.");
        }
      })
      .catch((error) => {
        alert(
          "Ocorreu um erro ao tentar registrar. Tente novamente mais tarde."
        );
      });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#05B6EF", fontSize: 24 }}>Crie uma conta</Text>
      <TextInput
        mode="outlined"
        label="Nome de usuário"
        value={username}
        onChangeText={setUsername}
        style={{ width: "80%", marginVertical: 10 }}
      />
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={{ width: "80%", marginVertical: 10 }}
      />
      <TextInput
        mode="outlined"
        label="Crie uma senha"
        value={password}
        onChangeText={setPassword}
        style={{ width: "80%", marginVertical: 10 }}
      />
      <Button onPress={handleRegistration}>Cadastre-se</Button>
      <Text style={{ marginVertical: 10 }}>Ou entre com</Text>
      <Button icon="google" mode="contained" style={{ marginVertical: 5 }}>
        Cadastre-se com Google
      </Button>
    </View>
  );
};

export default RegisterScreen;
