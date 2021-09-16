import { ColorsProps } from './theme.props';

const colors: { default: ColorsProps } = {
  default: {
    background: {
      primary: 'rgb(23, 45, 85)',
      secondary: 'rgb(34, 68, 114)',
    },
    text: {
      primary: 'rgb(0,0,0)',
      secondary: 'rgb(241, 250, 238)',
    },
    button: {
      background: 'rgb(230, 57, 70)',
      border: 'rgb(241, 250, 238)',
    },
    other: {
      primary: 'rgb(168, 218, 220)',
    },
    shadow: {
      primary: '#000',
      secondary: '#7f7f7f',
    },
    alert: {
      success: 'rgb(27, 153, 139)',
      error: 'rgb(215, 38, 61)',
    },
  },
};

export { colors };
