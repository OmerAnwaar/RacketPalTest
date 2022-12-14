import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {logAnalytic} from 'shared/utils';
import ReviewModal from '../../modals/ReviewModal';
import styles from './styles';

const HomeScreen = () => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(prevState => !prevState);
  }

  function onDisplay() {
    logAnalytic('review-modal', '123453');
    setModal(true);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="rating"
        onPress={onDisplay}
        style={styles.button}>
        <Text style={styles.textStyle}>Give a Feedback</Text>
      </TouchableOpacity>
      <ReviewModal visible={modal} toggleModal={toggleModal} />
    </View>
  );
};

export default HomeScreen;
