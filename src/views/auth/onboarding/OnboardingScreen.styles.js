import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../../styles';

export default StyleSheet.create({
  root: {
    height: '100%',
  },
  container: {
    flex: 1,
    padding: spacing.SCALE_18,
    justifyContent: 'space-evenly',
  },
  actionContainer: {
    paddingHorizontal: spacing.SCALE_10,
  },
  title: {
    ...fonts.FONT_BOLD,
    fontSize: fonts.FONT_SIZE_36,
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
  },
  text: {
    ...fonts.FONT_REGULAR,
    fontSize: fonts.FONT_SIZE_20,
    textAlign: 'center',
    paddingVertical: spacing.SCALE_18,
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: spacing.SCALE_18,
  },
  paginationContainer: {
    paddingVertical: spacing.SCALE_18,
  },
});
