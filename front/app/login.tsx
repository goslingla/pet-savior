import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App name</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="exemplo@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          theme={{ colors: { primary: "#333333", outline: "grey" } }}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          placeholder="Entre com sua senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          theme={{ colors: { primary: "#333333", outline: "grey" } }}
        />
        <Button
          onPress={handleNavigateToHome}
          style={styles.loginButton}
          labelStyle={{
            color: "white",
          }}
        >
          Login
        </Button>
        <Text style={styles.orText}>Ou entre com</Text>
        <Button
          icon="google"
          mode="outlined"
          style={styles.socialButton}
          labelStyle={{
            color: "grey",
          }}
        >
          Entrar com Google
        </Button>
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Não tem conta?</Text>
          <Button
            mode="text"
            onPress={handleNavigateToRegister}
            style={styles.registerButton}
            labelStyle={{
              color: "#333333",
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            Cadastre-se
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EB8E4B",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EB8E4B",
    height: "25%",
    width: "100%",
  },
  headerText: {
    color: "white",
    fontSize: 24,
  },
  formContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: "100%",
  },

  input: {
    width: "80%",
    marginVertical: 10,
  },
  orText: {
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#333333",
    width: 330,
    height: 50,
    borderRadius: 10,
    marginVertical: 30,
  },
  socialButton: {
    marginVertical: 5,

    borderColor: "grey",
    borderWidth: 1,
    width: 330,
    height: 50,
    borderRadius: 10,
  },
  registerText: {
    marginVertical: 10,
  },
  registerButton: {
    marginVertical: 5,
  },

  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LoginScreen;
