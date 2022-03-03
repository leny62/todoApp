import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import { Card } from '../Card';

const Dashboard = ({onDelete, onEdit, data}) => {
  return (
    <ScrollView style={styles.container}>
      { data.length < 1 ? 
      (<View style={styles.empty}>
        <Text style={styles.emptyText}>Loading Todos....</Text>
        </View>
        ) 
        : 
        (
        data.map((item, i) => (
          <Card 
          key={i}
          onDelete={() =>onDelete(item.id)} 
          onEdit={() => onEdit(item.id)} 
          title={item.id} 
          body={item.title}
          />
        )))}
    </ScrollView>
  );
};

export default Dashboard;
