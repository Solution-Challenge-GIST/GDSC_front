import { getDisplayWidth } from '../utility';

// colors
export const baseColor = '#FFF7DA';
export const bgColor = '#fff';

// font
// a. fontWeight
export const mediumFontWeight = '400';
export const semiBoldFontWeight = '500';
export const boldFontWeight = '700';

// b. fontSize
export const seniorMediumFontSize = 28;
export const juniorMediumFontSize = 18;
export const juniorSmallFontSize = 11;
export const seniorBigFontSize = 44;

// c. fontFamily
export const fontFamily = {
  RobotoMedium: 'roboto-regular',
  RobotoSemiBold: 'roboto-medium',
  RobotoBold: 'roboto-bold',
};

// etc
export const boxBorderRadious = getDisplayWidth(26);
export const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
};
