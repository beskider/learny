import React from 'react';
import { useState } from 'react';
import { View, SafeAreaView } from 'react-native';

import { preparePages, OnboardingPanel } from './helpers';

import styles from './OnboardingScreen.styles';

const OnboardingScreen = ({ navigation }) => {

  const [page, setPage] = useState(0);

  const handleNextPage = () => setPage(prevPage => prevPage + 1);
  const handleBack = () => setPage(prevPage => prevPage - 1);

  const pages = preparePages(navigation, handleBack, handleNextPage);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <OnboardingPanel
          activePage={page}
          numOfPages={pages.length}
          {...pages[page]}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
