/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import BlueButton from '../../components/BlueButton';
import {useNavigation} from '@react-navigation/native';

const facebookIcon = require('../../assets/icons/facebook/facebook.png');
const googleIcon = require('../../assets/icons/google/google.png');
const rastroWhite = require('../../assets/icons/rastro-white/rastrowhite.png');

function LoginScreen(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  function handleNavigateToRegistration() {
    navigation.navigate('Registration');
  }

  function handleLogin(e) {
    console.log('logado!');
  }

  function handleNavigationToWelcome(e) {
    navigation.navigate('Welcome');
  }

  return (
    <View className="flex-1 bg-[#05B6EF]">
      <View className="justify-center items-center bg-[#05B6EF] h-1/4 w-full flex">
        <Image source={rastroWhite} />
      </View>
      <View className="justify-center bg-white flex items-center rounded-t-[40px]">
        <View className="flex my-5 justify-between w-full items-center mt-6">
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="exemplo@gmail.com"
            autoFocus
            value={email}
            onChangeText={e => setEmail(e)}
            style={{width: '80%', marginVertical: 10}}
          />
          <TextInput
            mode="outlined"
            label="Senha"
            placeholder="Entre com sua senha"
            value={password}
            onChangeText={e => setPassword(e)}
            style={{width: '80%', marginVertical: 10}}
          />
          <View className="flex-row">
            <Text>Lembre de mim</Text>
            <Button
              onPress={() => console.log('esqueceu a senha')}
              mode="text"
              style={{}}
              labelStyle={{color: '#E86969'}}>
              Esqueceu a senha?
            </Button>
          </View>
          <BlueButton
            title="Login"
            onPress={e => handleNavigationToWelcome(e)}
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
            Entre com Facebook
          </Button>
          <Button
            className="my-2"
            mode="elevated"
            icon={() => <Image source={googleIcon} style={{marginRight: 20}} />}
            labelStyle={{color: 'gray'}}
            style={{
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 5,
              width: '80%',
              borderColor: 'black',
            }}>
            Entre com Google
          </Button>
          <View className="flex-row my-5">
            <Text className="mx-2 font-normal text-black pt-2">
              Não tem conta?
            </Text>
            <Button
              onPress={() => handleNavigateToRegistration()}
              mode="text"
              labelStyle={{color: '#05B6EF'}}>
              Cadastre-se
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
