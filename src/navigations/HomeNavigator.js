import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';


import {BottomTab} from '../components/BottomTab';
import {CREATE_SCREEN, DASHBOARD_SCREEN, EDIT_SCREEN, HOME_SCREEN} from '../constants/routeNames';
import { Icon } from '../components/Icon';

const HomeNavigator = ({navigation}) => {
    const HomeStack = createStackNavigator();

    const openDrawer = () => navigation.openDrawer();

    const getHeaderTitle = route => {
        const activeName = getFocusedRouteNameFromRoute(route) ?? DASHBOARD_SCREEN;

        switch (activeName) {
        case CREATE_SCREEN:
            return CREATE_SCREEN;
        case EDIT_SCREEN:
            return EDIT_SCREEN;
        default:
            return DASHBOARD_SCREEN;
        }
    };
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="reorder-three" type="ionicon" size={30} />
            </TouchableOpacity>
          ),
        })}
        name={'Root'}
        component={BottomTab}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;