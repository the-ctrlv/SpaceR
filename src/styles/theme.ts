export interface IThemeItem {
  [key: string]: string | number | IThemeItem | Gradient;
}

export interface Gradient {
  [key: string]: string;
}

export const colors: IThemeItem = {
  layoutBG: '#ededf4',
  modalOverlay: 'rgba(0, 0, 0, 0.7)',
  modalHeader: '#E7E9F1',
  themeTextColor: '#31313A',
  overlayOnWhiteBG: 'rgba(255, 255, 255, 0.50)',
  themeBorder: '#e5e5e5',
  scrollBarBG: '#dcdada',
  themeMainColor: '#EE905A',
  selectOption: '#ee905a8c',
  selectMenuBG: '#fff',
  cardBG: 'rgba(255, 255, 255, 0.5)',
  contentOverlay: '#fff',
  insideContentOverlay: '#F3F4F8',
  checkboxBG: 'rgba(0, 0, 0, 0.05)',
  orange: '#EE905A',
  sensorHeader: '#5e57a512',
  lightOrange: '#F2C27A',
  white: '#fff',
  spaceBlue: '#6A8CDF',
  lightBlue: '#7DB8E3',
  violet: '#5E57A5',
  red: '#C94545',
  success: '#2DDB9C',
  warning: '#F9CB72',
  gradient: {
    orange: 'linear-gradient(274.9deg, #C7467C -41.31%, #F5B75B 96.18%);',
    themeSwitcher:
      'linear-gradient(123.4deg, #C94545 0%, #EE905A 44.09%, #F9CB72 98.6%);',
    blue: 'linear-gradient(108.74deg, #7DB8E3 0%, #5E57A5 100%)',
  },
};

export const light: IThemeItem = {
  ...colors,
};

export const dark: IThemeItem = {
  ...colors,
  layoutBG: '#000',
  themeMainColor: colors.spaceBlue,
  themeTextColor: '#ffffff',
  themeBorder: '#494949',
  scrollBarBG: '#b9b9b9',
  overlayOnWhiteBG: 'rgba(255, 255, 255, 0.05)',
  contentOverlay: 'rgba(255, 255, 255, 0.05)',
  insideContentOverlay: 'rgba(255, 255, 255, 0.05)',
  checkboxBG: 'rgba(255, 255, 255, 0.05)',
  modalHeader: '#222229',
  selectOption: 'rgba(255, 255, 255, 0.1)',
  selectMenuBG: '#1c1c1c',
  cardBG: 'rgba(255, 255, 255, 0.1)',
  sensorHeader: 'rgba(255, 255, 255, 0.05)',
  gradient: {
    themeSwitcher: 'linear-gradient(108.74deg, #7DB8E3 0%, #5E57A5 100%)',
  },
};
