import { Dimensions, PixelRatio } from 'react-native';

const GUIDE_LINE_BASE_WIDTH = 375;

const dimensions = (top, right, bottom, left, propertyName) => {
  return {
    [`${propertyName}Top`]: top,
    [`${propertyName}Right`]: right,
    [`${propertyName}Bottom`]: bottom,
    [`${propertyName}Left`]: left,
  };
};

export const scaleSize = size => {
  const windowWidth = Dimensions.get('window').width;
  return (windowWidth / GUIDE_LINE_BASE_WIDTH) * size;
};

export const scaleFont = size => {
  return PixelRatio.getFontScale() * size;
};

export const margin = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'margin');
};

export const padding = (top, right, bottom, left) => {
  return dimensions(top, right, bottom, left, 'padding');
};

export const boxShadow = (
  color,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowRadius: radius,
    shadowOpacity: opacity,
    elevation: radius,
  };
};
