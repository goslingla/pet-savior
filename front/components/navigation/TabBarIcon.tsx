import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

// Componente para Ionicons
type IoniconsProps = ComponentProps<typeof Ionicons>;

type IoniconsTabBarIconProps = {
  name: IoniconsProps["name"];
  color: string;
  style?: IconProps<IoniconsProps["name"]>["style"];
};

export function IoniconsTabBarIcon({
  name,
  color,
  style,
}: IoniconsTabBarIconProps) {
  return (
    <Ionicons
      name={name}
      size={28}
      color={color}
      style={[{ marginBottom: -3 }, style]}
    />
  );
}

// Componente para MaterialIcons
type MaterialIconsProps = ComponentProps<typeof MaterialIcons>;

type MaterialIconsTabBarIconProps = {
  name: MaterialIconsProps["name"];
  color: string;
  style?: IconProps<MaterialIconsProps["name"]>["style"];
};

export function MaterialIconsTabBarIcon({
  name,
  color,
  style,
}: MaterialIconsTabBarIconProps) {
  return (
    <MaterialIcons
      name={name}
      size={28}
      color={color}
      style={[{ marginBottom: -3 }, style]}
    />
  );
}

// Componente para MaterialCommunityIcons
type MaterialCommunityIconsProps = ComponentProps<
  typeof MaterialCommunityIcons
>;

type MaterialCommunityIconsTabBarIconProps = {
  name: MaterialCommunityIconsProps["name"];
  color: string;
  style?: IconProps<MaterialCommunityIconsProps["name"]>["style"];
};

export function MaterialCommunityIconsTabBarIcon({
  name,
  color,
  style,
}: MaterialCommunityIconsTabBarIconProps) {
  return (
    <MaterialCommunityIcons
      name={name}
      size={28}
      color={color}
      style={[{ marginBottom: -3 }, style]}
    />
  );
}
