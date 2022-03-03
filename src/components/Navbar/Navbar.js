import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Navbar= ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text >{'<'}</Text>
    </TouchableOpacity>
  );
};

export default Navbar;
