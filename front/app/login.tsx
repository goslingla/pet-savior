import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import BlueButton from "../components/BlueButton";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  function handleNavigateToHome() {
    router.push("/tabs");
  }

  function handleNavigateToRegister() {
    router.push("/register");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#05B6EF",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#05B6EF",
          height: "25%",
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontSize: 24 }}>Rastro</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="exemplo@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={{ width: "80%", marginVertical: 10 }}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          placeholder="Entre com sua senha"
          value={password}
          onChangeText={setPassword}
          style={{ width: "80%", marginVertical: 10 }}
        />
        <BlueButton title="Login" onPress={handleNavigateToHome} />
        <Text style={{ marginVertical: 10 }}>Ou entre com</Text>
        <Button icon="facebook" mode="contained" style={{ marginVertical: 5 }}>
          Entrar com Facebook
        </Button>
        <Button icon="google" mode="contained" style={{ marginVertical: 5 }}>
          Entrar com Google
        </Button>
        <Text style={{ marginVertical: 10 }}>Não tem conta?</Text>
        <Button
          mode="text"
          onPress={handleNavigateToRegister}
          style={{ marginVertical: 5 }}
        >
          Cadastre-se
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
