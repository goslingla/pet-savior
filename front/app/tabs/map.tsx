import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={require("../../assets/map.html")}
        style={styles.webview}
      />
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
});
