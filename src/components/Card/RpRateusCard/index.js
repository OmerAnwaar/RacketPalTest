import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {icons} from '../../../shared/constants';
import RpButton from '../../RpButton';
import styles from './styles';

const RpRateUsCard = ({onRateUs, onFeedback, handleVisible, testId}) => {
  return (
    <View style={styles.containerWidth}>
      <View style={styles.modalContainer}>
        <View style={styles.subContainer}>
          <Pressable onPress={handleVisible} style={styles.iconStyleContainer}>
            <Image source={icons.CLOSE} style={styles.iconStyle} />
          </Pressable>
          <Image
            source={icons.REVIEW_STARS}
            style={styles.reviewStars}
            resizeMode={'contain'}
          />
          <Text style={styles.title}>Enjoying RacketPal?</Text>
          <Text style={styles.subTitle}>
            Your App Store review greatly helps spread the word and grow the
            racket sports community!
          </Text>
          <RpButton label={'Rate us'} onPress={onRateUs} />
          <Pressable testID={testId} onPress={onFeedback}>
            <Text style={styles.feedbackText}>Not yet? Give us feedback</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default RpRateUsCard;
