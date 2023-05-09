import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, constants, fonts, spacing } from '../../styles';

const TextInputLabeled = ({
  label,
  value,
  icon,
  onBlur,
  onChange,
  errors,
  actionLabel,
  action,
  ...rest
}) => {

  const [ focus, setFocus ] = useState(false)

  return (
    <View style={[styles.container, errors && styles.containerWithErrors ]}>
      { ( action || label ) && (
        <View style={styles.actionContainer}>
          <Text style={styles.label}>{label}</Text>
          { action && <TouchableOpacity onPress={action}>
            <Text style={styles.actionLabel}>{actionLabel}</Text>
          </TouchableOpacity>
          }
        </View>
      )}      
      <View style={[ styles.input, 
                     focus && styles.focus,
                     errors && styles.error      
      ]}>
        {icon}
        <TextInput 
          selectionColor={colors.ADDITIONAL_COLORS.TEXT.DARK}
          style={styles.textInput}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={onChange}
          {...rest}
        />
      </View>
      { errors && <Text style={styles.errorLabel}>{errors?.message}</Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.SCALE_8,
  },
  containerWithErrors: {
    marginBottom: 0,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: spacing.SCALE_8,

  },
  actionLabel: {
    marginRight: spacing.SCALE_16,
    fontSize: fonts.FONT_SIZE_16,
    color: colors.MAIN_COLORS.TERTIARY,
  },
  label: {
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    fontSize: fonts.FONT_SIZE_16,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: constants.BORDER_RADIUS.BUTTON,
    backgroundColor: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    paddingHorizontal: spacing.SCALE_18,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.SCALE_12,
    fontSize: fonts.FONT_SIZE_16,
    color: colors.ADDITIONAL_COLORS.TEXT.DARK,
    ...fonts.FONT_BOLD,
  },
  focus: {
    backgroundColor: colors.ADDITIONAL_COLORS.MARKED,
  },
  error: {
    backgroundColor: colors.ADDITIONAL_COLORS.ERROR,
  },
  errorLabel: {
    color: colors.ADDITIONAL_COLORS.ERROR,
    fontSize: fonts.FONT_SIZE_14,
    paddingLeft: spacing.SCALE_8,
  },
});

export default TextInputLabeled;
