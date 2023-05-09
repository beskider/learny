import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '../constants';

import LoginScreen from '../../views/auth/login';
import OnboardingScreen from '../../views/auth/onboarding';
import SignUpScreen from '../../views/auth/signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.AUTH.ONBOARDING.ID}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name={SCREENS.AUTH.LOGIN.ID} 
        component={LoginScreen} 
      />
      <Stack.Screen
        name={SCREENS.AUTH.ONBOARDING.ID}
        component={OnboardingScreen}
      />
      <Stack.Screen 
        name={SCREENS.AUTH.SIGN_UP.ID} 
        component={SignUpScreen} 
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
