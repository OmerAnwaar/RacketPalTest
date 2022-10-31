import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
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
