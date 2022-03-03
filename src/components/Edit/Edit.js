import React from 'react';
import {View, Text} from 'react-native';
import { LANDING_SCREEN } from '../../constants/routeNames';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './styles';

const Edit = ({goToScreen, handleSubmit, handleChange, value}) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Edit Todo</Text>
      <Input 
        placeholder={"Edit todo"} 
        style={styles.input} 
        onChangeText={(value) =>handleChange(value)}
        value={value}
        editabled
        />
      <View style={styles.btn}>
        <Button primary title="Save" onPress={handleSubmit}/>
      </View>
    </View>
  );
};

export default Edit;
