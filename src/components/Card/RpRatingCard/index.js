import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {colors, icons} from '../../../shared/constants';
import styles from './styles';
import RpButton from '../../RpButton';

const RpRatingCard = ({
  rating,
  onDismiss,
  handleCancel,
  onRatingCompleted,
  onSubmit,
  onRemindMeLater,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Pressable onPress={onDismiss} style={styles.containerWidth}>
        <View style={[styles.starContainer, rating && {height: 400}]}>
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
              onFinishRating={onRatingCompleted}
              starContainerStyle={styles.starSubContainer}
            />
            {rating < 4 && rating !== 0 ? (
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
                  onPress={onSubmit}
                />
              </>
            ) : (
              <Pressable onPress={onRemindMeLater}>
                <Text style={styles.remindmelater}>remind me later</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
export default RpRatingCard;
