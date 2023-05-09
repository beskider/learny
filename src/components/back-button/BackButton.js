import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, constants, spacing, fonts } from '../../styles';

import GoBack from '../../assets/svg/icons/go-back.svg';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={constants.ACTIVE_OPACITY}
      style={styles.buttonContainer}
    >
      <GoBack width={12} height={12} />
      <Text style={styles.label}>Go back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    borderRadius: constants.BORDER_RADIUS.ACTION_BUTTON,
    width: 80,
    padding: spacing.SCALE_10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors.ADDITIONAL_COLORS.TEXT.DARK,
    ...fonts.FONT_BOLD,
    fontSize: fonts.FONT_SIZE_12,
  },
});

export default BackButton;
