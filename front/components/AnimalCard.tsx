import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { Button } from "react-native-paper";

type AnimalCardProps = {
  name: string;
  age: string;
  image: string;
  onPress: () => void;
};

const AnimalCard = ({ name, age, image, onPress }: AnimalCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={{ uri: image }} style={styles.card}>
        <View style={styles.overlay}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
          <Button mode="contained" onPress={onPress} style={styles.button}>
            Mostrar Interesse
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  card: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    marginBottom: 20,
    borderRadius: 10, // Adicione esta linha
    overflow: "hidden", // Adicione esta linha
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  name: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  age: {
    fontSize: 16,
    color: "white",
  },
  button: {
    marginTop: 10,
  },
});

export default AnimalCard;
