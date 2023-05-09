import { SCREENS } from '../constants';
import DashboardScreen from '../../views/home/dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={SCREENS.HOME.DASHBOARD.ID}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={SCREENS.HOME.DASHBOARD.ID}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
