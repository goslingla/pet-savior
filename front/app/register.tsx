import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Crie uma conta</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          label="Nome de usuário"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          theme={{ colors: { primary: "#333333", outline: "grey" } }}
        />
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          theme={{ colors: { primary: "#333333", outline: "grey" } }}
        />
        <TextInput
          mode="outlined"
          label="Crie uma senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          theme={{ colors: { primary: "#333333", outline: "grey" } }}
        />
        <Button
          onPress={handleRegistration}
          style={styles.registerButton}
          contentStyle={{ height: 50 }}
          labelStyle={{
            color: "white",
            fontSize: 15,
            fontFamily: "Poppins-Regular",
          }}
        >
          Cadastrar
        </Button>
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
  registerButton: {
    backgroundColor: "#333333",
    width: 330,
    height: 50,
    borderRadius: 10,
    marginVertical: 30,
    justifyContent: "center",
  },
  socialButton: {
    marginVertical: 5,
    borderColor: "#333333",
    borderWidth: 1.5,
    width: 330,
    height: 50,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default RegisterScreen;
