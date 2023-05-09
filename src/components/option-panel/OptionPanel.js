import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { colors, constants, fonts, spacing } from '../../styles';

import Checkmark from '../../assets/svg/icons/checkmark.svg';

const OptionPanel = ({ value, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      activeOpacity={constants.ACTIVE_OPACITY}
    >
      <View style={[styles.container, isActive && styles.activeContainer ]}>
        <View style={styles.column}></View>
        <View style={[styles.column, styles.columnMiddle]}>
          <Text style={styles.label}>{value}</Text>
        </View>
        <View style={styles.column}>
          { isActive && <Checkmark width={60} height={60} /> }
        </View>
      </View>
    </TouchableOpacity>
  )
};
const styles = StyleSheet.create({
  column: {
    width: '25%',
    alignItems: 'center',
  },
  columnMiddle: {
    width: '50%',
  },
  container: {
    flexDirection: 'row',
    padding: spacing.SCALE_18,
    backgroundColor: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    marginVertical: spacing.SCALE_8,
    borderRadius: constants.BORDER_RADIUS.BUTTON,
    alignItems: 'center',
    height: spacing.SCALE_18 * 4,
  },
  activeContainer: {
    backgroundColor: colors.ADDITIONAL_COLORS.MARKED,
  },
  label: {
    ...fonts.FONT_BOLD,
    fontSize: fonts.FONT_SIZE_16,
    color: colors.ADDITIONAL_COLORS.TEXT.DARK,
  },
});

export default OptionPanel;
