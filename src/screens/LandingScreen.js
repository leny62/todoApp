import React from 'react';
import { View , StatusBar} from 'react-native';

import {Landing} from '../components/Landing';

const LandingScreen = ({navigation}) => {
    const gotoScreen = (route) => {
        navigation.navigate(route)
    }
  return (
      <View>
          <StatusBar barStyle="dark-content" backgroundColor="white" /> 
          <Landing gotoScreen={gotoScreen}/>
      </View>
  )
};

export default LandingScreen;




