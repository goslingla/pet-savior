import React from 'react';
import {Image} from 'react-native';
import {Appbar} from 'react-native-paper';

const rastroOrange = require('../assets/icons/rastro-orange/rastroorange.png');
const _handleSearch = () => console.log('Searching');
const _handleMore = () => console.log('Shown more');

const TopBar = () => {
  return (
    <Appbar.Header className="justify-between">
      <Appbar.Action icon="menu" onPress={_handleMore} />
      <Image source={rastroOrange} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default TopBar;
