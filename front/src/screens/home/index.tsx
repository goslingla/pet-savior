/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import TopBar from '../../components/TopBar';
import {BottomNavigation} from 'react-native-paper';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function HomeScreen(): JSX.Element {
  const MapRoute = () => (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{flex: 1}}
      region={{
        latitude: -27.599853585791422,
        longitude: -48.51779658880484,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />

  );
  const AdoptRoute = () => (
    <View className="bg-purple-500 h-full">
      <Text>Deseja anunciar animal para adoção ou adotar?</Text>
    </View>
  );
  const NotificationsRoute = () => <Text>Notifications</Text>;
  const ChatRoute = () => <Text>Chat</Text>;

  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {
      key: 'map',
      title: 'Mapa',
      focusedIcon: 'map-marker',
      unfocusedIcon: 'map-marker-outline',
    },
    {
      key: 'adopt',
      title: 'Adotar',
      focusedIcon: 'paw',
      unfocusedIcon: 'paw-outline',
    },
    {
      key: 'notifications',
      title: 'Notificações',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
    {
      key: 'chat',
      title: 'Chat',
      focusedIcon: 'chat',
      unfocusedIcon: 'chat-outline',
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    map: MapRoute,
    adopt: AdoptRoute,
    notifications: NotificationsRoute,
    chat: ChatRoute,
  });

  return (
    <>
      <TopBar />
      <BottomNavigation
        navigationState={{index, routes}}
        barStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 5,
        }}
        theme={{colors: {secondaryContainer: 'transparent'}}}
        activeColor="#05B6EF"
        shifting={true}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
}

export default HomeScreen;
