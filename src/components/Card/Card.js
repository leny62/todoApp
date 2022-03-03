import React from 'react';
import {View, Text} from 'react-native';
import { Button } from '../Button';
import styles from './styles';

const Card = ({title, body, onEdit, onDelete}) => {
  return (
    <View style={styles.container}> 
     <View style={styles.contentWrapper}>
       <Text style={styles.title}>{title}</Text>
       <Text style={styles.body}>{body}</Text> 
     </View>
      <View style={styles.btnWrapper}>
          <View style={[styles.btn, styles.pr]}>
            <Button primary title="Edit" onPress={onEdit}/>
          </View>
          <View style={styles.btn}>
            <Button danger title="Delete" onPress={onDelete}/>
          </View>
      </View>
    </View>
  );
};

export default Card;
