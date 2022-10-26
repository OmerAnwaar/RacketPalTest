import {StyleSheet} from 'react-native';
import {colors, theme} from '../../shared/constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...theme.CENTER,
  },
  button: {
    height: 70,
    width: 100,
    backgroundColor: colors.NOBEL,
    ...theme.CENTER,
  },
});

export default styles;
