import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { WebView } from "react-native-webview";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

export default function TabTwoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [currentLatLng, setCurrentLatLng] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const webViewRef = useRef<WebView>(null);

  // Função para mostrar o modal e capturar a localização
  const showModal = (latLng: { lat: number; lng: number }) => {
    setCurrentLatLng(latLng);
    setModalVisible(true);
  };

  // Função para listar arquivos no diretório de cache
  const listFilesInCache = async () => {
    const cacheDirectory = FileSystem.cacheDirectory || "";
    const files = await FileSystem.readDirectoryAsync(cacheDirectory);
    console.log("Arquivos no diretório de cache:", files);
  };

  // Função para adicionar marcador e enviar mensagem ao WebView
  const addMarker = async () => {
    if (webViewRef.current && currentLatLng && selectedType) {
      let savedImageUrl = imageUrl;

      if (imageUrl) {
        const fileName = imageUrl.split("/").pop() || "temp_image.jpg";
        const cacheDirectory = FileSystem.cacheDirectory || "";
        const newPath = `${cacheDirectory}${fileName}`;

        console.log("Saving image to:", newPath);

        try {
          await FileSystem.copyAsync({
            from: imageUrl,
            to: newPath,
          });
          savedImageUrl = newPath;
          // Chamar a função para listar arquivos no cache
          await listFilesInCache();
        } catch (error) {
          console.error(
            "Erro ao copiar a imagem para o diretório de cache",
            error
          );
        }
      }

      const message = {
        type: selectedType,
        latLng: currentLatLng,
        imageUrl: savedImageUrl,
      };

      console.log("Sending message to WebView:", message);
      webViewRef.current.postMessage(JSON.stringify(message));
    }
    setUploadModalVisible(false);
    setModalVisible(false);
    setImageUrl(null);
  };

  const handleReport = (type: string) => {
    setSelectedType(type);
    setModalVisible(false);
    setUploadModalVisible(true);
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUrl(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={require("../../assets/map.html")}
        style={styles.webview}
        onMessage={(event) => {
          const latLng = JSON.parse(event.nativeEvent.data);
          showModal(latLng);
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>O que deseja reportar?</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleReport("sighting")}
            >
              <Text style={styles.buttonText}>Avistamento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleReport("missing")}
            >
              <Text style={styles.buttonText}>Desaparecimento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={uploadModalVisible}
        onRequestClose={() => setUploadModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Faça o upload da imagem do animal:
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={pickImage}>
              <Text style={styles.buttonText}>Escolher da Galeria</Text>
            </TouchableOpacity>
            {imageUrl && (
              <Image
                source={{ uri: imageUrl }}
                style={{ width: 100, height: 100, marginVertical: 10 }}
              />
            )}
            <TouchableOpacity style={styles.modalButton} onPress={addMarker}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goBackButton} onPress={addMarker}>
              <Text
                style={{
                  color: "black",
                  fontSize: 16,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Pular
              </Text>
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
  },
  webview: {
    flex: 1,
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: "Poppins-Regular",
  },
  modalButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  goBackButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "100%",
  },
});
