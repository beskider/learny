import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import HomeStack from './home-stack';
import AuthStack from './auth-stack';

import { colors } from '../styles';

DefaultTheme.colors.background = colors.MAIN_COLORS.PRIMARY;

const Routes = () => {
  
  const user = null; // TODO

  return (
    <NavigationContainer>
      { user ? <HomeStack/> : <AuthStack/> }
    </NavigationContainer>
  );
};

export default Routes;
