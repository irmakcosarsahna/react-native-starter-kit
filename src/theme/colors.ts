import { ColorsProps } from './theme.props';

const colors: { default: ColorsProps } = {
  default: {
    primary: '#E50019',
    background: {
      primary: '#FAFAFA',
      secondary: '#FAFAFA',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      white: '#FFFFFF',
    },
    button: {
      background: '#555555',
      disable: '#CCCCCC',
    },
    other: {
      primary: '#E50019',
    },
    shadow: {
      primary: '#000',
      secondary: '#7f7f7f',
    },
    alert: {
      success: 'rgb(27, 153, 139)',
      error: 'rgb(215, 38, 61)',
    },
    icon: {
      color: '#E50019',
    },
    box: {
      primary: '#F2F2F2',
      secondary: '#262626',
    },
    border: {
      primary: '#E1E1E1',
      secondary: '#EEEFF3',
      input: '#b7b7b7',
    },
  },
};

export { colors };
