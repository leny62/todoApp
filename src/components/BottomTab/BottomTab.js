import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
    CREATE_SCREEN,
  DASHBOARD_SCREEN,
  EDIT_SCREEN,
} from '../../constants/routeNames';
import {Icon} from '../Icon';
import {appColors} from '../../assets/theme/Colors';
import styles from './styles';
import DashboardScreen from '../../screens/DashboardScreen';
import CreateScreen from '../../screens/CreateScreen';
import EditScreen from '../../screens/EditScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {paddingBottom: 10, paddingTop: 5, height: 70},
        labelStyle: styles.lableStyle,
        activeTintColor: appColors.primary,
        inactiveTintColor: appColors.secondary,
      }}>
      <Tab.Screen
        name={DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              type="ionicon"
              name="md-home-outline"
              size={25}
              color={focused ? appColors.primary : appColors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              type="material"
              name="add"
              size={25}
              color={focused ? appColors.primary : appColors.secondary}
            />
          ),
        }}
        name={CREATE_SCREEN}
        component={CreateScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              type="feather"
              name="edit"
              size={25}
              color={focused ? appColors.primary : appColors.secondary}
            />
          ),
        }}
        name={EDIT_SCREEN}
        component={EditScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;