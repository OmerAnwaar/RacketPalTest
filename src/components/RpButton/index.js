import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function RpButton({label, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
export default RpButton;
