import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
  Platform,
  Keyboard,
  Linking,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {colors, icons} from '../../shared/constants';
import RpButton from '../RpButton';
import styles from './styles';

const appleStore = 'itms-apps://itunes.apple.com/us/app/id1453817491?mt=8';
const googlePlayStore = 'market://details?id=com.racketpal';

export default function ReviewModal({data, visible, handlePress, setVisible}) {
  const [star, setStar] = useState(false);
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  function handleCancel() {
    setStar(false);
    setVisible(false);
    setRating(0);
  }
  function ratingCompleted(rating) {
    setRating(rating);
    if (rating > 3) {
      handleCancel();
      Linking.openURL(Platform.OS === 'ios' ? appleStore : googlePlayStore);
    }
  }

  return (
    <Modal visible={visible} transparent animationType={'slide'}>
      <Pressable style={styles.container}>
        {!star ? (
          <View style={styles.containerWidth}>
            <View style={styles.modalContainer}>
              <View style={styles.subContainer}>
                <Pressable
                  onPress={() => setVisible(false)}
                  style={styles.iconStyleContainer}>
                  <Image source={icons.CLOSE} style={styles.iconStyle} />
                </Pressable>
                <Image
                  source={icons.REVIEW_STARS}
                  style={styles.reviewStars}
                  resizeMode={'contain'}
                />
                <Text style={styles.title}>Enjoying RacketPal?</Text>
                <Text style={styles.subTitle}>
                  Your App Store review greatly helps spread the word and grow
                  the racket sports community!
                </Text>
                <RpButton
                  label={'Rate us'}
                  onPress={() => {
                    setStar(true);
                  }}
                />
                <Pressable
                  onPress={() => {
                    setVisible(false);
                    navigation.navigate('Contact Us');
                  }}>
                  <Text style={styles.feedbackText}>
                    Not yet? Give us feedback
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Pressable
              onPress={() => Keyboard.dismiss()}
              style={styles.containerWidth}>
              <View
                style={
                  rating
                    ? {...styles.starContainer, height: 400}
                    : styles.starContainer
                }>
                <View style={styles.subContainer}>
                  <View style={styles.editContainer}>
                    <Image
                      source={icons.EDIT}
                      style={styles.editIcon}
                      resizeMode={'contain'}
                    />
                  </View>
                  <Text style={styles.starTitle}>Enjoying RacketPal?</Text>
                  <Text style={styles.subTitleStar}>
                    Tap a star to rate it on the App store
                  </Text>
                  <AirbnbRating
                    size={30}
                    count={5}
                    showRating={false}
                    defaultRating={0}
                    selectedColor={colors.PRIMARY}
                    onFinishRating={ratingCompleted}
                    starContainerStyle={styles.starSubContainer}

                    // starImage={icons.STAR}
                  />
                  {rating < 4 && rating != 0 ? (
                    <>
                      <Text style={styles.label}>ANY FEEDBACK FOR US?</Text>
                      <TextInput
                        style={styles.inputStyle}
                        selectionColor={colors.PRIMARY}
                        multiline={true}
                      />
                      <RpButton
                        label={'Submit'}
                        style={styles.submitButton}
                        onPress={handleCancel}
                      />
                    </>
                  ) : (
                    <Pressable onPress={handleCancel}>
                      <Text style={styles.remindmelater}>remind me later</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </Pressable>
          </KeyboardAvoidingView>
        )}
      </Pressable>
    </Modal>
  );
}
