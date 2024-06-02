import { Tabs } from "expo-router";
import React from "react";

import {
  IoniconsTabBarIcon,
  MaterialIconsTabBarIcon,
  MaterialCommunityIconsTabBarIcon,
} from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <IoniconsTabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIconsTabBarIcon
              name={focused ? "map-marker" : "map-marker-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="adopt"
        options={{
          title: "Adotar",
          tabBarIcon: ({ color, focused }) => (
            <IoniconsTabBarIcon
              name={focused ? "paw" : "paw-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: "Denunciar",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIconsTabBarIcon
              name={focused ? "report" : "report-gmailerrorred"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}