// Types
import { SET } from './types';
// Props
// Props
import { themeReduxProps } from './theme.props';

const INIT_STATE: themeReduxProps = {
  root: 'default',
  spacing: 'default',
};

const theme = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET:
      return {
        ...state,
        root: payload,
      };
    default:
      return state;
  }
};

export { theme };
