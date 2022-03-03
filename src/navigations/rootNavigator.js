import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {user_storage} from '../utils/constants';

const RootNavigator = () => {
const stackNavigator = createStackNavigator()
  return (
    <NavigationContainer >
      <stackNavigator.Navigator initialRouteName='Landing'>
        <stackNavigator.Screen  name='auth' component={AuthNavigator} options={{headerShown: false}}/>
        <stackNavigator.Screen  name='Drawer' component={DrawerNavigator} options={{headerShown: false}}/>
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;