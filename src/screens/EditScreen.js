import React, { useState } from 'react';
import {useRoute} from '@react-navigation/native';
import axios from "axios";

import {Edit} from '../components/Edit';
import { DASHBOARD_SCREEN } from '../constants/routeNames';

const url = 'https://jsonplaceholder.typicode.com/todos'

const EditScreen = ({navigation}) => {
    const parm = useRoute()
    const indexToEdit =  parm.params?.toBeEdited

  const [todo, setTodo] = useState(indexToEdit?.[0]?.title)

  const handleSubmit = async() => {
    console.log("submitted", todo)
    const result = await axios.put(`${url}/${indexToEdit[0].id}`, {title: todo})
    if (result){
      navigation.navigate(DASHBOARD_SCREEN, {updatedTodo: result.data})
    }
    
  }
  const handleChange = (value) => {
    setTodo(value); 
  };
  const goToScreen = (route) => {
    navigation.navigate(route)
  }
  return (
    <Edit  
      goToScreen={goToScreen}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      value={todo}
      />
  );
};

export default EditScreen;
