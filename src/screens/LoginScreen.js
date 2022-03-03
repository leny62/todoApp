import React, {useState} from 'react';

import {Login} from '../components/Login';

const LoginScreen = ({navigation}) => {
  const [formErr, setFormErr] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);


  const onChangeText = ({name, value}) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };


  const goToScreen = (route) => {
    navigation.navigate(route)
}

const handleSubmit = () => {
  if (email === '') {
    setFormErr({
      email: 'Email is required',
    });
  } else if (password === '') {
    setFormErr({
      password: 'Password is required',
    });
  } else {
    if (email === "test@gmail.com" && password === "Test123") {
      goToScreen('Drawer')
      setEmail('')
      setPassword('')
    } else {
      setErr("Invalid credentials")
    }
  }
};
  return <Login 
            errors={formErr}
            onSubmit={handleSubmit}
            onChangeText={onChangeText}
            error={err}
          />;
};
export default LoginScreen;

