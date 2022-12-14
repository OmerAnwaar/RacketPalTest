import {StyleSheet} from 'react-native';
import {colors, theme} from '../../shared/constants';

const styles = StyleSheet.create({
  buttonStyle: {
    ...theme.CENTER,
    paddingVertical: '5%',
    backgroundColor: colors.BLUE,
    borderRadius: 6,
    width: '80%',
  },
  buttonText: {
    color: colors.WHITE,
  },
});
export default styles;
