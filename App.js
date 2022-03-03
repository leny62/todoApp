/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './src/navigations/rootNavigator';
import styles from './src/components/Landing/styles';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {

  return (
  <SafeAreaView style={styles.appWrapper}>
      <RootNavigator onNavigationStateChange={null}/>
  </SafeAreaView>
  );
};


export default App;
