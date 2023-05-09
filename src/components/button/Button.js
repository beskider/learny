import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, constants, fonts, spacing } from '../../styles';

import GoForward from '../../assets/svg/icons/go-forward.svg';

const Button = ({ label, onPress, isChevronDisplayed = false, color }) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={constants.ACTIVE_OPACITY}
    >
      <View style={[ styles.buttonContainer, color && {  backgroundColor: color } ]}>
        <View style={[ styles.actionContainer, styles.leftActionContainer ]} />
        <Text style={styles.label}>{label}</Text>
        <View style={styles.actionContainer}>
          {isChevronDisplayed && <GoForward width={12} height={12} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    borderRadius: constants.BORDER_RADIUS.BUTTON,
    padding: spacing.SCALE_10,
    marginVertical: spacing.SCALE_8,
    alignItems: 'center',
    width: '100%',
  },
  actionContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  leftActionContainer: {
    alignItems: 'flex-start',
  },
  label: {
    ...fonts.FONT_BOLD,
    fontSize: fonts.FONT_SIZE_16,
    color: colors.ADDITIONAL_COLORS.TEXT.DARK,
  },
});

export default Button;
