import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, constants, fonts, spacing } from '../../styles';

const ActionButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={constants.ACTIVE_OPACITY}
      style={styles.button}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.MAIN_COLORS.SECONDARY,
    padding: spacing.SCALE_10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: constants.BORDER_RADIUS.ACTION_BUTTON,
    margin: spacing.SCALE_8 / 2,
  },
  label: {
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    ...fonts.FONT_BOLD,
    fontSize: fonts.FONT_SIZE_12,
  },
});

export default ActionButton;
