import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Impedir que a tela de carregamento seja ocultada automaticamente
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
          "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
          "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        });
        setFontLoaded(true);
        SplashScreen.hideAsync(); // Esconde a tela de carregamento
      } catch (e) {
        console.warn(e);
      }
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // Retorne null ou um componente de carregamento
  }

  return <Redirect href="/login" />;
}
