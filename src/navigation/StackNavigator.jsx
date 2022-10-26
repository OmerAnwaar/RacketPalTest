import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../screens/Test';
import ContactUs from '../screens/ContactUs';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TestScreen} />
      <Stack.Screen name="Contact Us" component={ContactUs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
