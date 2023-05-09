import { View, Text } from 'react-native';

import { USER_LIKES } from '../constants';

import BackButton from '../../../../components/back-button';
import OptionPanel from '../../../../components/option-panel';
import Pagination from '../../../../components/pagination';
import Button from '../../../../components/button';

import styles from '../SignUpScreen.styles';

const SignupLikesScreen = ({
  numOfPages,
  activePage,
  userInformation,
  handleBack,
  handleNextPage,
  handleChangeUserLikes,
}) => {

  const userLikes = Object.values(USER_LIKES);

  return (
    <>
      <View style={styles.actionContainer}>
        <BackButton onPress={handleBack} />
      </View>
      <View>
        <Text style={styles.title}>Tell us what do you like</Text>
      </View>
      <View>
        <Text style={styles.text}>Choose one best</Text>
      </View>
      <View style={styles.options}>
        {userLikes.map(userLike => (
          <OptionPanel
            key={userLike}
            value={userLike}
            isActive={userInformation.likes.includes(userLike)}
            onPress={handleChangeUserLikes}
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

export default SignupLikesScreen;
