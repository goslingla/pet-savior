import React from "react";
import { Image } from "react-native";
import { Appbar } from "react-native-paper";

const rastroOrange = require("../assets/icons/rastro-orange/rastroorange.png");

const _handleSearch = () => console.log("Searching");
const _handleMore = () => console.log("Shown more");

const TopBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={_handleMore} />
      <Image source={rastroOrange} style={{ width: 40, height: 40 }} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default TopBar;
