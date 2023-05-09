import { View, Text } from 'react-native';

import LearnImage from '../../../assets/svg/onboarding-screen/learn-practice-master.svg';
import BuildSkillsImage from '../../../assets/svg/onboarding-screen/build-skills.svg';
import BetterWayImage from '../../../assets/svg/onboarding-screen/better-way.svg';

import Pagination from '../../../components/pagination';
import Button from '../../../components/button';
import ActionButton from '../../../components/action-button';
import BackButton from '../../../components/back-button';

import styles from './OnboardingScreen.styles';
import { SCREENS } from '../../../navigation/constants';

export const preparePages = (navigation, handleBack, handleNextPage) => {
  return [
    {
      id: 'learn-practice-master',
      action: (
        <>
          <ActionButton
            label="Login"
            onPress={() => navigation.navigate(SCREENS.AUTH.LOGIN.ID)}
          />
          <ActionButton 
            label="Sign Up"
            onPress={() => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID) }/>
        </>
      ),
      actionPosition: 'flex-end',
      title: 'Learn \nPractice \nMaster',
      text: 'Become a expert and accelerate your career by building skills in live environments.',
      image: <LearnImage width={300} />,
      buttonLabel: 'Continue',
      buttonAction: handleNextPage,
    },
    {
      id: 'build-skills',
      action: <BackButton onPress={handleBack} />,
      actionPosition: 'flex-start',
      title: 'Build skills and advance your career',
      text: 'Keep learning in the moments that matter. No setup cost, no need for highly technical knowledge.',
      image: <BuildSkillsImage width={300} />,
      buttonLabel: 'Continue',
      buttonAction: handleNextPage,
    },
    {
      id: 'better-way',
      action: <BackButton onPress={handleBack} />,
      actionPosition: 'flex-start',
      title: 'Learny is a better way to learn',
      text: 'It’s 2023. Deliver the learning at modern way with Learny platform.',
      image: <BetterWayImage width={300} />,
      buttonLabel: 'SignUp',
      buttonAction: () => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID),
    },
  ];
};

export const OnboardingPanel = ({
  action,
  actionPosition,
  title,
  text,
  image,
  numOfPages,
  activePage,
  buttonLabel,
  buttonAction,
}) => {

  return (
    <>
      <View style={[ styles.actionContainer, { alignItems: actionPosition } ]}>
        {action}
      </View>
      <View>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        {image}
      </View>
      <View style={styles.paginationContainer}>
        <Pagination 
          numOfPages={numOfPages} 
          activePage={activePage}
        />
      </View>
      <View>
        <Button 
          label={buttonLabel}
          onPress={buttonAction}
          isChevronDisplayed={true}
        />
      </View>
    </>
  );
};
