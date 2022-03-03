import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import {Avatar, Caption, Drawer, Paragraph} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Icon} from '../Icon';
import styles from './styles';
import {appColors} from '../../assets/theme/Colors';
import { CREATE_SCREEN, DASHBOARD_SCREEN, EDIT_SCREEN, LOGIN_SCREEN } from '../../constants/routeNames';
import { photo_url, user_storage } from '../../utils/constants';


const DrawerContent = ({data, navigation}) => {

  const navigateToScreen = route => {
    navigation.navigate(route)
  };

  const handleLogout = async() => {
    navigation.navigate('auth')
  }

  const handlePress = routeName => {
    switch (routeName.toLowerCase()) {
      case 'dashboard':
        return navigateToScreen(DASHBOARD_SCREEN);
      case 'create':
        return navigateToScreen(CREATE_SCREEN);
      case 'edit':
        return navigateToScreen(EDIT_SCREEN);
      case 'logout':
        return handleLogout()
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView>
        <View>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => handlePress(DASHBOARD_SCREEN)}>
            <Avatar.Image source={{uri: photo_url}} size={60} />
            <View style={styles.profile_info}>
              <Paragraph
                style={{
                  textTransform: 'capitalize',
                }}>{`${'profile.last_name'} ${'profile.first_name'}`}</Paragraph>
              <Caption>{'test@gmail.com'}</Caption>
            </View>
          </TouchableOpacity>
          <Drawer.Section style={styles.linkItems}>
            {data.map((item, index) => (
              <DrawerItem
                key={index}
                icon={() => (
                  <Icon
                    type={item.type}
                    name={item.name}
                    size={20}
                    style={{color: appColors.black}}
                  />
                )}
                label={item.title}
                onPress={() => handlePress(item.title)}
              />
            ))}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.logout}>
        <DrawerItem
          label="logout"
          icon={() => (
            <Icon type="materialCommunity" name="exit-to-app" size={20} />
          )}
          onPress={() => handlePress('logout')}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

export default DrawerContent;