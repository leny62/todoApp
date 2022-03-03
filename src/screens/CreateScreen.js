import React, {useState} from 'react';
import axios from "axios"

import {Create} from '../components/Create';
import { DASHBOARD_SCREEN } from '../constants/routeNames';

const url = 'https://jsonplaceholder.typicode.com/todos'

const CreateScreen = ({navigation}) => {
  const [todo, setTodo] = useState('')
  
  const handleSubmit = async() => {
  const result = await axios.post(url, {title: todo, completed: false})
  if (result) {
      setTodo('')
      navigation.navigate(DASHBOARD_SCREEN, {newTodo: result.data})
    }
  }
  const handleChange = (value) => {
    setTodo(value); 
  };
  return <Create handleSubmit={handleSubmit} handleChange={handleChange}  inputValue={todo}/>;
};

export default CreateScreen;
