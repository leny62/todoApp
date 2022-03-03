import React, { useEffect, useState } from 'react';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

import {Dashboard} from '../components/Dashboard';
import { EDIT_SCREEN } from '../constants/routeNames';

const url = 'https://jsonplaceholder.typicode.com/todos'

const DashboardScreen = ({navigation}) => {
  const [data, setData] = useState([])

  const parm = useRoute()
  const newTd =  parm.params?.newTodo
  const updatedTd =  parm.params?.updatedTodo

  useEffect(async() => {
    const res  = await axios.get(url)
    const result = res.data
      setData(result)
  },[])

  const getCombined = () => {
    data.push(newTd)
  }

  if (newTd) {
    getCombined() 
  }
  if (updatedTd){
    data.splice(updatedTd.id -1, 1, updatedTd)
  }
  const onDelete = (index) => {
    const result = data.filter((item, i) => item.id !== index)
    setData(result) 
  }
  const onEdit = (index) => {
    const toEdit = data.filter((item, _) => item.id === index)
    navigation.navigate(EDIT_SCREEN, {toBeEdited: toEdit})
  }
  
  return (
    <Dashboard 
      onDelete={onDelete}
      onEdit={onEdit}
      data={data}
      />
  );
};

export default DashboardScreen;
