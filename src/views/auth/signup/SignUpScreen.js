import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import SignupWhoScreen from './pages/SignupWhoScreen';
import SignupLikesScreen from './pages/SignupLikesScreen';
import SignupFormsScreen from './pages/SignupFormsScreen';

import styles from './SignUpScreen.styles';

const SignUpScreen = ({ navigation }) => {

  const [page, setPage] = useState(0);
  const [userInformation, setUserInfrmation] = useState({
    userType: '',
    likes: [],
  });

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  const handleBack = () => setPage(prevPage => prevPage - 1);

  const handleSetUserType = userType => {
    setUserInfrmation(prevState => ({
      ...prevState,
      userType,
    }));
  };

  const handleChangeUserLikes = userLike => {
    if (userInformation.likes.includes(userLike)) {
      setUserInfrmation(prevState => ({
        ...prevState,
        likes: userInformation.likes.filter(like => like !== userLike),
      }));
    } else {
      setUserInfrmation(prevState => ({
        ...prevState,
        likes: [...prevState.likes, userLike],
      }));
    }
  };

  const renderScreen = () => {
    switch (page) {
      case 0:
        return <SignupWhoScreen
                  navigation={navigation}
                  numOfPages={3}
                  activePage={page}
                  userInformation={userInformation}
                  handleNextPage={handleNextPage}
                  handleSetUserType={handleSetUserType}
               />
      case 1: 
        return <SignupLikesScreen
                  numOfPages={3}
                  activePage={page}
                  userInformation={userInformation}
                  handleBack={handleBack}
                  handleNextPage={handleNextPage}
                  handleChangeUserLikes={handleChangeUserLikes}
               />
      case 2:
        return <SignupFormsScreen
                  numOfPages={3}
                  activePage={page}
                  handleBack={handleBack}
               />
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        { renderScreen() }
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
