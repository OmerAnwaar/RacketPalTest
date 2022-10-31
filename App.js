import {NavigationContainer} from '@react-navigation/native';

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import remoteConfig from '@react-native-firebase/remote-config';

const App = () => {
  useEffect(() => {
    remoteConfig()
      .setDefaults({
        varient_2: true,
      })
      .then(() => {
        console.log('Default values set.');
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
