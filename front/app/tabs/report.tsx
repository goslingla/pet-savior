import { View, Text, StyleSheet, Linking, Image } from "react-native";
import { Button } from "react-native-paper";

const reportImage = require("../../assets/images/report.png");

export default function TabFourScreen() {
  const handlePress = () => {
    Linking.openURL(
      "https://www.pmf.sc.gov.br/entidades/bemestaranimal/index.php?cms=denuncie+aqui&menu=6&submenuid=451"
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={reportImage} style={styles.image} />
        <Text style={styles.title}>Ajude um peludo!</Text>
        <Text style={styles.message}>
          Para casos de maus tratos ocorridos em Florianópolis, a entidade
          responsável é o <Text style={styles.boldText}>Dibea</Text>. Acesse o
          portal clicando no botão abaixo, leia as instruções e realize sua
          denúncia!
        </Text>
        <Button
          mode="contained"
          onPress={handlePress}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Denunciar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginHorizontal: 0,
  },
  message: {
    fontSize: 16,
    color: "#333333",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 18,
    color: "#333333",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#333333",
    width: 150,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  boldText: {
    fontFamily: "Poppins-Bold",
  },
  image: {
    width: 117,
    height: 172,
    marginBottom: 20,
  },
});
