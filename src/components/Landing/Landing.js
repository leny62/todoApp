import React from 'react';
import {View, Text} from 'react-native';
import { LOGIN_SCREEN } from '../../constants/routeNames';
import { Button } from '../Button';
import styles from './styles';

const Landing = ({gotoScreen}) => {
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Text style={styles.title}>ToDo</Text>
        </View>
        <Text style={styles.welcome}>Welcome, to ToDo app. You can schedule your todos</Text>
        <View style={styles.btnWrapper}>
            <Button 
                title={"Get started"} 
                onPress={() => gotoScreen(LOGIN_SCREEN)}
                primary
            />
        </View>
    </View>
  );
};

export default Landing;
