import { View, Text, StyleSheet } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './validationSchema';

import BackButton from '../../../components/back-button';
import TextInputLabeled from '../../../components/text-input-labeled';
import Button from '../../../components/button/Button';

import EmailIcon from '../../../assets/svg/icons/email-icon.svg';
import PadlockIcon from '../../../assets/svg/icons/padlock-icon.svg';

import { colors, fonts, spacing } from '../../../styles';
import { SCREENS } from '../../../navigation/constants';
import { FONT_SIZE_16 } from '../../../styles/fonts';

const LoginScreen = ({ navigation }) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = ({ email, password }) => {
    try {
      console.log(email, ':', password);
    } catch (err) {
      Alert(err);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View>
          <Text style={styles.title}>Login now!</Text>
          <Text style={styles.text}>Enter information in order to login to Learny</Text>
        </View>
        <View style={styles.forms}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <TextInputLabeled
                label="Email"
                value={value}
                icon={<EmailIcon width={20} height={20} />}
                onBlur={onBlur}
                onChange={onChange}
                errors={errors.email}
                autoCapitalize="none"
                autoComplete="off"
                inputMode="email"
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <TextInputLabeled
                label="Password"
                value={value}
                icon={<PadlockIcon width={20} height={20} />}
                onBlur={onBlur}
                onChange={onChange}
                errors={errors.password}
                autoCapitalize="none"
                secureTextEntry={true}
                autoComplete="off"
              />
            )}
            name="password"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label="Login"
            onPress={handleSubmit(onSubmit)}
            isChevronDisplayed={true}
            color={colors.ADDITIONAL_COLORS.MARKED}
          />
          <Button
            label="Sign up"
            onPress={() => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID)}
            isChevronDisplayed={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: FONT_SIZE_16,
    color: colors.ADDITIONAL_COLORS.TEXT.LIGHT,
    textAlign: 'center',
    paddingVertical: spacing.SCALE_18,
  },
  forms: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
  },
});

export default LoginScreen;
