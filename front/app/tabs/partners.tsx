import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function TabFiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossos Parceiros</Text>
      <View style={styles.adsContainer}>
        <View style={styles.ad}>
          <Image
            source={require("../../assets/images/vet.png")} // Substitua pelo caminho da imagem real
            style={styles.adImage}
          />
          <View style={styles.adTextContainer}>
            <Text style={styles.adTitle}>Veterinário Amigo</Text>
            <Text style={styles.adDescription}>
              Cuide da saúde do seu pet conosco!
            </Text>
          </View>
        </View>
        <View style={styles.ad}>
          <Image
            source={require("../../assets/images/petshop.png")} // Substitua pelo caminho da imagem real
            style={styles.adImage}
          />
          <View style={styles.adTextContainer}>
            <Text style={styles.adTitle}>Pet Shop Felicidade</Text>
            <Text style={styles.adDescription}>
              Tudo para o seu pet em um só lugar!
            </Text>
          </View>
        </View>
        <View style={styles.ad}>
          <Image
            source={require("../../assets/images/adestrador.png")}
            style={styles.adImage}
          />
          <View style={styles.adTextContainer}>
            <Text style={styles.adTitle}>Adestramento Bom Garoto</Text>
            <Text style={styles.adDescription}>
              Treinamento profissional para o seu cão!
            </Text>
          </View>
        </View>
        <View style={styles.ad}>
          <Image
            source={require("../../assets/images/hotel.png")}
            style={styles.adImage}
          />
          <View style={styles.adTextContainer}>
            <Text style={styles.adTitle}>Pet Hotel Conforto</Text>
            <Text style={styles.adDescription}>
              Hospedagem de qualidade para seu pet!
            </Text>
          </View>
        </View>
        <View style={styles.ad}>
          <Image
            source={require("../../assets/images/food.png")}
            style={styles.adImage}
          />
          <View style={styles.adTextContainer}>
            <Text style={styles.adTitle}>Comida Saudável Pet</Text>
            <Text style={styles.adDescription}>
              Alimentação natural e saudável para seu pet!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80, // Adiciona mais espaço no topo
    backgroundColor: "#e0e0e0", // Cor de fundo cinza claro
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  adsContainer: {
    width: "100%",
  },
  ad: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  adImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  adTextContainer: {
    flex: 1,
  },
  adTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
    color: "#333",
  },
  adDescription: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#666",
  },
});
