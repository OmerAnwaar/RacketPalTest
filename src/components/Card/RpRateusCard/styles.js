import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {theme, colors} from '../../../shared/constants';

const styles = StyleSheet.create({
  modalContainer: {
    height: 439,
    borderRadius: 12,
    backgroundColor: colors.WHITE,
  },
  containerWidth: {width: wp('90%')},
  subContainer: {
    ...theme.SINGLE_FLEX,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '5%',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 16.8,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  feedbackText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 40,
    textDecorationLine: 'underline',
  },
  iconStyle: {
    ...theme.ICON_DIMEN,
  },
  iconStyleContainer: {
    alignSelf: 'flex-end',
    marginEnd: wp(4),
  },
  reviewStars: {
    height: 80,
    width: '100%',
  },
});

export default styles;
