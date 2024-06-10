import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.canceled === true) {
      return;
    }

    setImage(pickerResult.uri);
  };

  const handleRegisterPet = () => {
    // Logic to handle pet registration
    setModalVisible(false);
    alert("Pet cadastrado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo, Luiz!</Text>
      <Text style={styles.description}>
        Este aplicativo visa ajudar animais perdidos, abandonados e que precisam
        de um novo lar. Para ter acesso à animais disponíveis para adoção, basta
        acessar a sessão{" "}
        <Text style={{ fontFamily: "Poppins-Bold" }}>Adotar</Text>. Para
        reportar pet desaparecido ou verificar os que foram avistados, acesse o{" "}
        <Text style={{ fontFamily: "Poppins-Bold" }}>Mapa</Text>.
      </Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.loginButtonText}>Cadastrar pet para Adoção</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Cadastrar para Adoção</Text>
            <TextInput
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              placeholder="Idade"
              value={age}
              onChangeText={setAge}
              style={styles.input}
            />
            <TextInput
              placeholder="Raça"
              value={breed}
              onChangeText={setBreed}
              style={styles.input}
            />
            <TextInput
              placeholder="Porte (pequeno, médio, grande)"
              value={size}
              onChangeText={setSize}
              style={styles.input}
            />
            <TextInput
              placeholder="Localização"
              value={location}
              onChangeText={setLocation}
              style={styles.input}
            />
            <TextInput
              placeholder="Motivo"
              value={reason}
              onChangeText={setReason}
              style={styles.input}
            />
            <Button onPress={openImagePickerAsync} style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Foto</Text>
            </Button>
            {image && <Text style={styles.imageText}>Imagem selecionada</Text>}
            <Button
              mode="contained"
              onPress={handleRegisterPet}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Ok</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 100,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#333333",
    width: 330,
    height: 50,
    borderRadius: 10,
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#333",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins-SemiBold",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
  },
  imageButton: {
    backgroundColor: "grey",
    width: 100,
    marginBottom: 10,
    justifyContent: "center",
  },
  imageButtonText: {
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  imageText: {
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
    color: "green",
  },
  modalButton: {
    backgroundColor: "#333333",
    width: 70,
    justifyContent: "center",
  },
  modalButtonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
});
