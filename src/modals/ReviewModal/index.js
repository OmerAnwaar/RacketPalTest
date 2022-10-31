import {useNavigation} from '@react-navigation/native';
import RpRateUsCard from '../../components/Card/RpRateusCard';
import RpRatingCard from '../../components/Card/RpRatingCard';

import React, {useState} from 'react';
import {Keyboard, Linking, Modal, Platform, Pressable} from 'react-native';

import {fetchConfig, getRemoteValue} from '../../services/firebase';
import {logAnalytic} from '../../shared/utils';
import styles from './styles';

const appleStore = 'itms-apps://itunes.apple.com/us/app/id1453817491?mt=8';
const googlePlayStore = 'market://details?id=com.racketpal';

const ReviewModal = ({visible, toggleModal}) => {
  const navigation = useNavigation();

  const [rating, setRating] = useState(0);

  fetchConfig().catch(console.log);

  const experiment = getRemoteValue('varient_2');

  function handleCancel() {
    logAnalytic('submit', '123');
    toggleModal();
    setRating(0);
  }

  function ratingCompleted(userRating) {
    setRating(userRating);
    if (userRating > 3) {
      handleCancel();
      Linking.openURL(Platform.OS === 'ios' ? appleStore : googlePlayStore);
    }
  }

  function handleDismiss() {
    logAnalytic('Dismissed Keyboard', '123');
    Keyboard.dismiss();
  }

  function handleRateUs() {
    handleCancel();
    Linking.openURL(Platform.OS === 'ios' ? appleStore : googlePlayStore);
  }

  function handleFeedback() {
    logAnalytic('Not yet', '351312');
    toggleModal();
    navigation.navigate('Contact Us');
  }

  return (
    <Modal visible={visible} transparent animationType={'slide'}>
      <Pressable style={styles.container}>
        {experiment ? (
          <RpRateUsCard
            testId={'feedback'}
            onRateUs={handleRateUs}
            onFeedback={handleFeedback}
            handleVisible={toggleModal}
          />
        ) : (
          <RpRatingCard
            onRatingCompleted={ratingCompleted}
            rating={rating}
            onRemindMeLater={handleCancel}
            onSubmit={handleCancel}
            onDismiss={handleDismiss}
          />
        )}
      </Pressable>
    </Modal>
  );
};
export default ReviewModal;
