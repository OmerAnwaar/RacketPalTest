import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const iconPath = '../../assets/Icons';
const extension = '.png';

export const icons = {
  EDIT: require(`${iconPath}/ic_edit${extension}`),
  STAR: require(`${iconPath}/ic_star${extension}`),
  CLOSE: require(`${iconPath}/ic_close${extension}`),
  REVIEW_STARS: require(`${iconPath}/ic_rating_stars${extension}`),
};

export const colors = {
  PRIMARY: '#FFC34E',
  WHITE: 'white',
  BLACK: 'black',
  SILVER: '#C8C7C7',
  DOVE_GRAY: '#696969',
  NOBEL: '#B4B4B4',
  BLUE: '#2196f3',
  TRANSPERANT: 'rgba(0,0,0,0.5)',
};

export const theme = {
  SINGLE_FLEX: {
    flex: 1,
  },
  ICON_DIMEN: {
    height: hp(3),
    width: wp(5),
  },
  CENTER: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
};
