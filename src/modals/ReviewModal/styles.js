import {StyleSheet} from 'react-native';
import {colors, theme} from '../../shared/constants';

const styles = StyleSheet.create({
  container: {
    ...theme.SINGLE_FLEX,
    ...theme.CENTER,
    backgroundColor: colors.TRANSPERANT,
  },
});

export default styles;
