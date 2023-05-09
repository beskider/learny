import { View, Text } from 'react-native';

import { USER_TYPE } from '../constants';
import { SCREENS } from '../../../../navigation/constants';

import PeopleImage from '../../../../assets/svg/signup-screen/people.svg';

import Button from '../../../../components/button';
import Pagination from '../../../../components/pagination';
import BackButton from '../../../../components/back-button';
import OptionPanel from '../../../../components/option-panel';

import styles from '../SignUpScreen.styles';

const SignupWhoScreen = ({
  navigation,
  numOfPages,
  activePage,
  userInformation,
  handleNextPage,
  handleSetUserType,
}) => {

  const userTypes = Object.values(USER_TYPE);

  return (
    <>
      <View style={styles.actionContainer}>
        <BackButton onPress={() => navigation.navigate(SCREENS.AUTH.ONBOARDING.ID)} />
      </View>
      <View>
        <Text style={styles.title}>Tell us who are you</Text>
      </View>
      <View style={styles.imageContainer}>
        <PeopleImage width={180} />
      </View>
      <Text style={styles.title}>I’m a</Text>
      <View style={styles.options}>
        {userTypes.map(userType => (
          <OptionPanel 
            key={userType}
            value={userType}
            isActive={userInformation.userType === userType}
            onPress={handleSetUserType}
          />
        ))}
      </View>
      <View style={styles.paginationContainer}>
        <Pagination numOfPages={numOfPages} activePage={activePage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          label="Continue"
          onPress={handleNextPage}
          isChevronDisplayed={true}
        />
      </View>
    </>
  );
};

export default SignupWhoScreen;
