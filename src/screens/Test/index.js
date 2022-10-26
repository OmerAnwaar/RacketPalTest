import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ReviewModal from '../../components/ReviewModal';
import styles from './styles';

const TestScreen = () => {
  const [modal, setModal] = useState(false);
  function handlePress() {}

  const data = {};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModal(true)} style={styles.button}>
        <Text>REVIEW MODAL</Text>
      </TouchableOpacity>
      <ReviewModal
        data={data}
        visible={modal}
        handlePress={handlePress}
        setVisible={setModal}
      />
    </View>
  );
};

export default TestScreen;
