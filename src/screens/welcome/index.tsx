import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import BlueButton from '../../components/BlueButton';
import {useNavigation} from '@react-navigation/native';

function WelcomeScreen(): JSX.Element {
  const [nextClicked, setNextClicked] = useState<boolean>(false);
  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View className="flex-1 bg-white">
      <View className="justify-around items-center h-4/5">
        {!nextClicked ? (
          <>
            <Text className="font-bold text-[28px] text-black mb-5">
              Bem vindo!
            </Text>
            <Text className="text-black text-[16px] text-center mx-10 mb-5">
              Vamos te ajudar a otimizar sua experiência aqui no app.
            </Text>
            <BlueButton title="Próximo" onPress={() => setNextClicked(true)} />
          </>
        ) : (
          <>
            <Text className="font-bold text-[28px] text-black mb-5 text-center">
              O que você busca com o Rastro?
            </Text>
            <BlueButton
              title="Adotar um pet"
              onPress={() => handleNavigateToHome()}
            />
            <BlueButton
              title="Relatar desaparecimento"
              onPress={() => handleNavigateToHome()}
            />
            <BlueButton
              title="Relatar avistamento"
              onPress={() => handleNavigateToHome()}
            />
            <BlueButton
              title="Denunciar maus tratos"
              onPress={() => handleNavigateToHome()}
            />
          </>
        )}
      </View>
    </View>
  );
}

export default WelcomeScreen;
