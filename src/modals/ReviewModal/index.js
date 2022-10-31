import {useNavigation} from '@react-navigation/native';
import RpRateUsCard from '../../components/Card/RpRateusCard';
import RpRatingCard from '../../components/Card/RpRatingCard';

import React, {useState} from 'react';
import {Keyboard, Linking, Modal, Platform, Pressable} from 'react-native';

import styles from './styles';
import {logAnalytic} from '../../shared/utils';

const appleStore = 'itms-apps://itunes.apple.com/us/app/id1453817491?mt=8';
const googlePlayStore = 'market://details?id=com.racketpal';

const ReviewModal = ({visible, toggleModal}) => {
  const navigation = useNavigation();

  const [preRating, setPreRating] = useState(false);
  const [rating, setRating] = useState(0);

  function handleCancel() {
    logAnalytic('submit', '123');
    setPreRating(false);
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
    logAnalytic('RateUs', '1234');
    setPreRating(true);
  }

  function handleFeedback() {
    logAnalytic('Not yet', '351312');
    toggleModal();
    navigation.navigate('Contact Us');
  }

  return (
    <Modal visible={visible} transparent animationType={'slide'}>
      <Pressable style={styles.container}>
        {!preRating ? (
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
