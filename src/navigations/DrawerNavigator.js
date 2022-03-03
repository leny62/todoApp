import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { CREATE_SCREEN, DASHBOARD_SCREEN, EDIT_SCREEN } from '../constants/routeNames';
import { DrawerContent } from '../components/DrawerContent';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) => (
        <DrawerContent
          data={[
            {name: 'md-home-outline', type: 'ionicon', title: DASHBOARD_SCREEN},
            {name: 'add', type: 'material', title: CREATE_SCREEN},
            {name: 'edit', type: 'feather', title: EDIT_SCREEN},
          ]}
          navigation={navigation}
        />
      )}>
      <Drawer.Screen name={'home'} component={HomeNavigator} options={{ headerShown: false}}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;