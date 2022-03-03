import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LANDING_SCREEN,
  LOGIN_SCREEN
} from '../constants/routeNames';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={LANDING_SCREEN}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name={LANDING_SCREEN}
        component={LandingScreen}
      />
      <AuthStack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;