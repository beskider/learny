import React from 'react'
import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles';

const Pagination = ({ numOfPages, activePage }) => {

  if (activePage >= numOfPages) return null;

  return (
    <View style={styles.container}>
      { Array(numOfPages).fill(null).map( (page, index) => (
          <View
            key={`page-${index}`}
            style={[ 
              styles.dot, 
              index === activePage && styles.activeDot
            ]}
          />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: spacing.SCALE_10,
    height: spacing.SCALE_8,
    borderRadius: spacing.SCALE_8,
    marginHorizontal: spacing.SCALE_8 / 2,
    backgroundColor: colors.MAIN_COLORS.SECONDARY,
  },
  activeDot: {
    width: spacing.SCALE_12 * 2,
    backgroundColor: colors.ADDITIONAL_COLORS.TEXT.DARK,
  },
});

export default Pagination;
