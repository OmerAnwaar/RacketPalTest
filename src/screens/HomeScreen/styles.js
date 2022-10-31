import {StyleSheet} from 'react-native';
import {colors, theme} from '../../shared/constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...theme.CENTER,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.BLUE,
    ...theme.CENTER,
  },
  textStyle: {
    color: colors.WHITE,
    fontWeight: 'bold',
  },
});

export default styles;
