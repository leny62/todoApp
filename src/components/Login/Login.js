import React from 'react';
import {View, Text} from 'react-native';

import {Input} from "../../components/Input"
import { DASHBOARD_SCREEN } from '../../constants/routeNames';
import { Button } from '../Button';
import styles from './styles';

const Login = ({onSubmit, loading, error, errors, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to schedule Todos</Text>
      <Input  
        lable="Email" 
        placeholder={"Enter your email"}
        error={errors?.email}  
        style={styles.input}
        onChangeText={value => onChangeText({name: 'email', value})}
        />
      <Input  
        lable="Password" 
        placeholder={"Enter your password"}
        // iconName={isVisible ? 'eye' : 'eye-slash'}
        // iconType="fa5" 
        style={styles.input}
        error={errors?.password}
        onChangeText={value => onChangeText({name: 'password', value})}
        />
      {error && <Text style={styles.res_error}>{error}</Text>}
      <View style={styles.btn}>
        <Button 
          title={loading ? 'Loading...' : 'Submit'} 
          primary 
          onPress={onSubmit}
          />
      </View>
    </View>
  );
};

export default Login;
