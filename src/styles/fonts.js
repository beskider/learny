import { scaleFont } from './mixins';

const FONT_FAMILY_REGULAR = 'Solway-Regular';
const FONT_FAMILY_BOLD = 'Solway-Bold';

const FONT_WEIGHT_REGULAR = '400';
const FONT_WEIGHT_BOLD = '100';

export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_24 = scaleFont(24);
export const FONT_SIZE_28 = scaleFont(28);
export const FONT_SIZE_36 = scaleFont(36);

export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
