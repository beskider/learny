import { StyleSheet } from 'react-native';
import { colors, constants, fonts, spacing } from '../../../styles';

export default StyleSheet.create({
  root: {
    height: '100%',
  },
  container: {
    flex: 1,
    padding: spacing.SCALE_18,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  actionContainer: {
    alignSelf: 'flex-start',
  },
  title: {
    ...fonts.FONT_BOLD,
    fontSize: fonts.FONT_SIZE_20,
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    textAlign: 'center',
  },
  text: {
    ...fonts.FONT_REGULAR,
    fontSize: fonts.FONT_SIZE_16,
    textAlign: 'center',
    paddingVertical: spacing.SCALE_18,
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
  },
  forms: {
    width: '100%',
  },
  options: {
    width: '100%',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: colors.MAIN_COLORS.TERTIARY,
    borderRadius: constants.BORDER_RADIUS.BUTTON,
    alignItems: 'center',
    paddingVertical: spacing.SCALE_18,
    width: '100%',
  },
  paginationContainer: {
    paddingVertical: spacing.SCALE_18,
  },
  buttonContainer: {
    width: '100%',
  },
});
