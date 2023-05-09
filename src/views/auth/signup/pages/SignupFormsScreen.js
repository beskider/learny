import { View, Text } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './validationSchema';

import BackButton from '../../../../components/back-button';
import Button from '../../../../components/button';
import Pagination from '../../../../components/pagination';
import TextInputLabeled from '../../../../components/text-input-labeled';

import EmailIcon from '../../../../assets/svg/icons/email-icon.svg';
import PadlockIcon from '../../../../assets/svg/icons/padlock-icon.svg';

import styles from '../SignUpScreen.styles';

const SignupFormsScreen = ({ numOfPages, activePage, handleBack }) => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password }) => {
    try {
      console.log(`e: ${email} p: ${password}`);
    } catch (err) {
      Alert(err);
    }
  };

  return (
    <>
      <View style={styles.actionContainer}>
        <BackButton onPress={handleBack} />
      </View>
      <View>
        <Text style={styles.title}>Sign up now!</Text>
        <Text style={styles.text}>Provide us your email and password in order to create account in Learny</Text>
      </View>
      <View style={styles.forms}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <TextInputLabeled 
              label="Email"
              value={value}
              icon={<EmailIcon width={20} height={20}/>}
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
              icon={<PadlockIcon width={20} height={20}/>}
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
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value }}) => (
            <TextInputLabeled
              label="Confirm password"
              value={value}
              icon={<PadlockIcon width={20} height={20}/>}
              onBlur={onBlur}
              onChange={onChange}
              errors={errors?.confirmPassword}
              autoCapitalize="none"
              secureTextEntry={true}
              autoComplete="off"
            />
          )}
          name="confirmPassword"
        />
      </View>
      <View style={styles.paginationContainer}>
        <Pagination numOfPages={numOfPages} activePage={activePage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label="Create account"
          onPress={handleSubmit(onSubmit)}
          isChevronDisplayed={true}
        />
      </View>
    </>
  );
};

export default SignupFormsScreen;
