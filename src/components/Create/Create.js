import React from 'react';
import {View, Text} from 'react-native';
import { Button } from '../Button';
import styles from './styles';
import { Input } from '../Input';

const Create = ({handleSubmit, handleChange, inputValue}) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Add New Todo</Text>
      <Input 
        placeholder={"Add todo"} 
        style={styles.input} 
        onChangeText={(value) =>handleChange(value)}
        value={inputValue}
        />
      <View style={styles.btn}>
        <Button primary title="Create" onPress={handleSubmit}/>
      </View>
    </View>
  );
};

export default Create;
