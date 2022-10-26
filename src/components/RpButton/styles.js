import {StyleSheet} from 'react-native';
import {colors, theme} from '../../shared/constants';

const styles = StyleSheet.create({
  buttonStyle: {
    ...theme.CENTER,
    paddingVertical: '5%',
    backgroundColor: '#1FB0F7',
    borderRadius: 6,
    width: '80%',
  },
  buttonText: {
    color: colors.WHITE,
  },
});
export default styles;
