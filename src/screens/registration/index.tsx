/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import BlueButton from '../../components/BlueButton';
import {useNavigation} from '@react-navigation/native';

const facebookIcon = require('../../assets/icons/facebook/facebook.png');
const googleIcon = require('../../assets/icons/google/google.png');

function RegistrationScreen(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  function handleNavigateToLogin() {
    navigation.navigate('Login');
  }

  function handleRegistration(e) {
    console.log('registrado!');
  }

  return (
    <View className="flex-1 bg-white">
      <View className="justify-center bg-white flex items-center mt-8">
        <Text className="text-[#05B6EF] font-bold text-lg">Crie uma conta</Text>
        <Text className="text-black font-bold text-sm">
          Conecte-se com seu pet hoje
        </Text>
        <View className="flex my-5 justify-between w-full items-center">
          <TextInput
            mode="outlined"
            label="Nome de usuário*"
            value={username}
            onChangeText={e => setUsername(e)}
            style={{width: '80%', marginVertical: 10}}
          />
          <TextInput
            mode="outlined"
            label="Email*"
            value={email}
            onChangeText={e => setEmail(e)}
            style={{width: '80%', marginVertical: 10}}
          />
          <TextInput
            mode="outlined"
            label="Crie uma senha*"
            value={password}
            onChangeText={e => setPassword(e)}
            style={{width: '80%', marginVertical: 10}}
          />
          <BlueButton
            title="Cadastre-se"
            onPress={e => handleRegistration(e)}
          />
          <Text className="my-5 font-normal text-black">Ou entre com</Text>
          <Button
            className="my-2"
            mode="elevated"
            icon={() => <Image source={facebookIcon} />}
            labelStyle={{color: 'white'}}
            style={{
              backgroundColor: '#1877F2',
              padding: 5,
              borderRadius: 5,
              width: '80%',
            }}>
            Cadastre-se com Facebook
          </Button>
          <Button
            className="my-2"
            mode="elevated"
            icon={() => <Image source={googleIcon} style={{marginRight: 20}} />}
            labelStyle={{color: 'black'}}
            style={{
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 5,
              width: '80%',
              borderColor: 'black',
            }}>
            Cadastre-se com Google
          </Button>
          <View className="flex-row">
            <Text className="my-5 mx-2 font-normal text-black underline">
              Já possui uma conta?
            </Text>
            <Button
              className="underline"
              onPress={() => handleNavigateToLogin()}
              mode="text"
              labelStyle={{color: '#05B6EF'}}>
              Faça o login
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RegistrationScreen;
