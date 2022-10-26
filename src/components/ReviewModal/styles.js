import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors, theme} from '../../shared/constants';

const styles = StyleSheet.create({
  container: {
    ...theme.SINGLE_FLEX,
    ...theme.CENTER,
    backgroundColor: colors.TRANSPERANT,
  },
  modalContainer: {
    height: 439,
    borderRadius: 12,
    backgroundColor: colors.WHITE,
  },

  containerWidth: {width: '90%'},
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
  subContainer: {
    ...theme.SINGLE_FLEX,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '5%',
  },

  //STAR MODAL

  starContainer: {
    height: 242,
    borderRadius: 12,
    backgroundColor: colors.WHITE,
  },
  editIcon: {
    height: 47,
    width: 47,
  },
  starTitle: {
    fontSize: 16,
    paddingTop: '15%',
    fontWeight: '700',
    textAlign: 'center',
  },
  editContainer: {
    top: -20,
    width: 84,
    height: 84,
    ...theme.CENTER,
    borderRadius: 45,
    position: 'absolute',
    backgroundColor: colors.WHITE,
  },
  subTitleStar: {
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  label: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '700',
    textAlign: 'left',
    color: colors.PRIMARY,
  },
  remindmelater: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 40,
    textTransform: 'uppercase',
    color: colors.NOBEL,
  },
  starSubContainer: {
    paddingVertical: 10,
    width: 300,
    justifyContent: 'space-evenly',
  },
  inputStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 6,
    height: 112,
    padding: '3%',
    paddingTop: '3%',
  },
  submitButton: {width: '100%', backgroundColor: colors.PRIMARY},
});

export default styles;
