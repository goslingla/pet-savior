import React from "react";
import { GestureResponderEvent } from "react-native";
import { Button } from "react-native-paper";

type BlueButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const BlueButton = (props: BlueButtonProps) => {
  return (
    <Button
      onPress={props.onPress}
      mode="contained"
      theme={{ colors: { primary: "white" } }}
      style={{
        backgroundColor: "#05B6EF",
        padding: 5,
        borderRadius: 5,
        width: "80%",
      }}
    >
      {props.title}
    </Button>
  );
};

export default BlueButton;
