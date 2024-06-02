import React from "react";
import { View, Text } from "react-native";

export default function TabThreeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Deseja anunciar animal para adoção ou adotar?</Text>
    </View>
  );
}
