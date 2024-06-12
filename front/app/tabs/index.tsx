import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button, Checkbox } from "react-native-paper";
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
  const [gender, setGender] = useState("");
  const [sizeSmall, setSizeSmall] = useState(false);
  const [sizeMedium, setSizeMedium] = useState(false);
  const [sizeLarge, setSizeLarge] = useState(false);

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
            <TouchableOpacity
              onPress={openImagePickerAsync}
              style={styles.input}
            >
              <Text style={styles.imageButtonText}>Carregar imagem</Text>
            </TouchableOpacity>
            {image && <Text style={styles.imageText}>Imagem selecionada</Text>}
            <Text style={styles.labelBold}>Porte:</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={sizeSmall ? "checked" : "unchecked"}
                onPress={() => {
                  setSizeSmall(true);
                  setSizeMedium(false);
                  setSizeLarge(false);
                }}
                color="#333333"
              />
              <Text style={styles.checkboxLabel}>Pequeno</Text>
              <Checkbox
                status={sizeMedium ? "checked" : "unchecked"}
                onPress={() => {
                  setSizeSmall(false);
                  setSizeMedium(true);
                  setSizeLarge(false);
                  setSize("Médio");
                }}
                color="#333333"
              />
              <Text style={styles.checkboxLabel}>Médio</Text>
              <Checkbox
                status={sizeLarge ? "checked" : "unchecked"}
                onPress={() => {
                  setSizeSmall(false);
                  setSizeMedium(false);
                  setSizeLarge(true);
                  setSize("Grande");
                }}
                color="#333333"
              />
              <Text style={styles.checkboxLabel}>Grande</Text>
            </View>
            <Text style={styles.labelBold}>Gênero:</Text>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={gender === "Macho" ? "checked" : "unchecked"}
                onPress={() => setGender("Macho")}
                color="#333333"
              />
              <Text style={styles.checkboxLabel}>Macho</Text>
              <Checkbox
                status={gender === "Fêmea" ? "checked" : "unchecked"}
                onPress={() => setGender("Fêmea")}
                color="#333333"
              />
              <Text style={styles.checkboxLabel}>Fêmea</Text>
            </View>
            <TouchableOpacity
              onPress={handleRegisterPet}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Ok</Text>
            </TouchableOpacity>
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
    marginBottom: 20,
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
  imageButtonText: {
    color: "gray",
    fontFamily: "Poppins-Regular",
  },
  imageText: {
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
    color: "green",
  },
  modalButton: {
    backgroundColor: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  modalButtonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  labelBold: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    marginTop: 10,
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});
